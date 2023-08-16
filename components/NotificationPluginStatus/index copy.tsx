import Link from "next/link";

const NotificationPluginStatus = () => {
  return (
    <>
      <div
        className="z-100 fixed inset-x-0 bottom-0 translate-y-0 scale-100 transform pb-2 opacity-100 transition duration-500 ease-out sm:pb-5"
        bis_skin_checked="1"
      >
        <div
          className="mx-auto max-w-screen-xl px-2 sm:px-4"
          bis_skin_checked="1"
        >
          <div
            className="rounded-lg bg-gray-900 p-2 shadow-lg sm:p-3"
            bis_skin_checked="1"
          >
            <div
              className="flex flex-wrap items-center justify-between"
              bis_skin_checked="1"
            >
              <div
                className="flex w-0 flex-1 items-center"
                bis_skin_checked="1"
              >
                {/* <img className="h-6" src="/_next/static/media/tailwind-ui-logo-on-dark.e075f076d1193a2062dc60571c75a1d2.svg" alt=""> */}
              </div>
              <div
                className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto"
                bis_skin_checked="1"
              >
              </div>
              <div
                className="order-2 flex-shrink-0 sm:order-3 sm:ml-2"
                bis_skin_checked="1"
              >
                <button
                  type="button"
                  className="-mr-1 flex rounded-md p-2 hover:bg-gray-800 focus:bg-gray-800 focus:outline-none"
                  aria-label="Hide banner"
                >
                  <svg
                    className="h-6 w-6 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationPluginStatus;
