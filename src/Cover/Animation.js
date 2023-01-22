import { useTransition, animated } from '@react-spring/web'

export default function MyComponent({ data = [1, 2, 3] }) {
  const [transitions] = useTransition(data, () => ({
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
  }))

  return transitions((style, item) => (
    <animated.div style={style}>{item}</animated.div>
  ))
}