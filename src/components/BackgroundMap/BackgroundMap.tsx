import usMapImage from '../../assets/images/us-map.png'

export default function BackgroundMap() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden bg-surface"
    >
      <img
        src={usMapImage}
        alt=""
        className="absolute left-1/2 top-1/2 h-auto w-[93%] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-90 sm:w-[78%]"
      />
    </div>
  )
}
