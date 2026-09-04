import LogInWrapper from "@/components/Login/wrapper";

export default function Home() {
  return (
    <div className="flex-1 min-h-0 grid mb-3.75 homepage-grid gap-3 w-full ">
      <div className="grid-child-1">
        <svg
          className="grid-children"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 480 480"
        >
          <g fill="#095332">
            <path d="M480 480H0a240 240 0 1 1 480 0Z"></path>
            <path d="M0 0h480A240 240 0 1 1 0 0Z"></path>
          </g>
        </svg>
      </div>
      <div className="grid-child-2">
        <svg
          className="grid-children"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 480 480"
        >
          <path
            d="M480 240H240V0a240 240 0 0 1 240 240ZM240 480H0V240a240 240 0 0 1 240 240ZM480 480H240V240a240 240 0 0 1 240 240ZM240 240H0V0a240 240 0 0 1 240 240Z"
            fill="#F73333"
          ></path>
        </svg>
      </div>
      <LogInWrapper children={undefined} />
      <div className="grid-child-4">
        <img
          src="/apple.png"
          className="h-full w-auto object-contain grid-children"
        ></img>
      </div>
      <div className="grid-child-5">
        <svg
          className="grid-children"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 480 480"
        >
          <path
            d="M240.2 240A240 240 0 0 0 480 0H240a240 240 0 1 0 0 480h240a240 240 0 0 0-239.8-240Z"
            fill="#095332"
          ></path>
        </svg>
      </div>
      <div className="grid-child-6">
        <svg
          className="grid-children"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 480 480"
        >
          <path
            d="M450.9 169.7a99.4 99.4 0 0 0-140.6 0 99.4 99.4 0 1 0-140.6 0 99.4 99.4 0 1 0 0 140.6 99.4 99.4 0 1 0 140.6 0 99.4 99.4 0 0 0 140.6-140.6ZM169.7 310.3l140.6-140.6"
            fill="#F73333"
          ></path>
        </svg>
      </div>
    </div>
  );
}
