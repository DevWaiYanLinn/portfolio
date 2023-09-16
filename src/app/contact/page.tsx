import Button from "../_components/common/Button";
import TextArea from "../_components/common/TextArea";
import TextField from "../_components/common/TextField";

export default function Page() {
  return (
    <div className="xs:mt-20 md:mt-5 mb-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl xs:text-2xl">Contact Me.</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 xs:w-8 ws:h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      </div>
      <hr className="border-dashed mt-3 border-opacity-50 border-white" />
      <div className="grid grid-cols-2 gap-8 mt-5">
        <div className="xs:col-span-2 md:col-span-1 space-y-8">
          <TextField placeholder="Name" />
          <TextField placeholder="Email" />
          <TextField placeholder="Subject" />
          <TextArea rows={6} placeholder='Message'/>
          <Button>Send Message</Button>
        </div>
        <div className="xs:col-span-2 md:col-span-1">
          <h2 className="text-3xl xs:text-2xl">Contect Information</h2>
          <ul className="flex flex-col space-y-10 mt-8">
            <li className="flex items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <span className="ml-3 xs:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </li>
            <li className="flex items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>
              <span className="ml-3 xs:text-sm">+959 981 499 455</span>
            </li>
            <li className="flex items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                  />
                </svg>
              </div>
              <span className="ml-3 xs:text-sm">
                waiyanlinn.lion@outlook.com
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
