import { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function ThreeScene() {
  const mountRef = useRef(null)
  const animRef = useRef(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 30

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // Mouse tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 }
    const onMouse = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.targetY = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouse)

    // Resize
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    // --- Floating wireframe shapes ---
    const shapes = []
    const geometries = [
      new THREE.IcosahedronGeometry(1.2, 0),
      new THREE.OctahedronGeometry(1, 0),
      new THREE.TetrahedronGeometry(1, 0),
      new THREE.TorusGeometry(0.8, 0.3, 8, 16),
      new THREE.DodecahedronGeometry(1, 0),
      new THREE.BoxGeometry(1, 1, 1),
    ]

    const wireframeMat = (color, opacity) =>
      new THREE.MeshBasicMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity,
      })

    const palette = [0x6366f1, 0x8b5cf6, 0xa78bfa, 0xc4b5fd, 0x818cf8, 0x93c5fd]

    for (let i = 0; i < 12; i++) {
      const geo = geometries[i % geometries.length]
      const mat = wireframeMat(palette[i % palette.length], 0.15 + Math.random() * 0.1)
      const mesh = new THREE.Mesh(geo, mat)

      const spread = 25
      mesh.position.set(
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * 15 - 5
      )

      const s = 0.5 + Math.random() * 1.5
      mesh.scale.set(s, s, s)

      mesh.userData = {
        rotSpeed: { x: (Math.random() - 0.5) * 0.005, y: (Math.random() - 0.5) * 0.005, z: (Math.random() - 0.5) * 0.003 },
        floatSpeed: 0.0003 + Math.random() * 0.0005,
        floatAmp: 0.3 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
        baseY: mesh.position.y,
      }

      scene.add(mesh)
      shapes.push(mesh)
    }

    // --- Particles ---
    const particleCount = 400
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30 - 5

      const c = new THREE.Color(palette[Math.floor(Math.random() * palette.length)])
      colors[i * 3] = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b
    }

    const particleGeo = new THREE.BufferGeometry()
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const particleMat = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.4,
      sizeAttenuation: true,
    })

    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    // --- Animate ---
    const clock = new THREE.Clock()

    const animate = () => {
      const t = clock.getElapsedTime()

      // Smooth mouse
      mouse.x += (mouse.targetX - mouse.x) * 0.03
      mouse.y += (mouse.targetY - mouse.y) * 0.03

      // Camera follows mouse
      camera.position.x = mouse.x * 2
      camera.position.y = -mouse.y * 1.5
      camera.lookAt(0, 0, 0)

      // Animate shapes
      for (const shape of shapes) {
        const d = shape.userData
        shape.rotation.x += d.rotSpeed.x
        shape.rotation.y += d.rotSpeed.y
        shape.rotation.z += d.rotSpeed.z
        shape.position.y = d.baseY + Math.sin(t * d.floatSpeed * 100 + d.phase) * d.floatAmp
      }

      // Slow particle rotation
      particles.rotation.y += 0.0002
      particles.rotation.x += 0.0001

      renderer.render(scene, camera)
      animRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      container.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="fixed inset-0"
      style={{ zIndex: 0, pointerEvents: 'none' }}
    />
  )
}
