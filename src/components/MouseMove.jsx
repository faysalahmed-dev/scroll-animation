import { useEffect } from "react"
import gsap from "gsap";
import { useCallback } from "react";
import { useRef } from "react";

export default function MouseMove() {
    const cursorRef = useRef(null)
    const moveMouse = useCallback(({ x, y }) => {
        if (cursorRef.current) {
            gsap.to(cursorRef.current, {
                x: x - 25, y: y - 25, duration: 0.2
            })
        }
    }, [])
    useEffect(() => {
        window.addEventListener('mousemove', moveMouse)
        return () => window.removeEventListener('mousemove', moveMouse)
    }, [])
    return (
        <div ref={cursorRef} style={{ width: '50px', height: '50px' }} className="border-2 border-orange-200 rounded-full">
        </div >
    )
}