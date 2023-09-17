export default function Page() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">About Me.</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            className="text-white"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      </div>
      <hr className="border-dashed mt-3" />
      <div className="mt-6 flex justify-between flex-wrap">
        <div className="md:w-[70%] xs:w-full xs:mb-5 md:mb-0">
          <h2 className="text-2xl xs:text-xl">Backend Developer</h2>
          <p className="mt-3 xs:text-sm md:text-inherit !leading-7">
            Greetings, I'm Wai Yan Lin, a graduate of the University of Computer
            Studies Maubin. My journey in the world of technology commenced with
            my graduation, and since then, I've been on an exhilarating quest to
            acquire a diverse set of skills, including MySQL, Node.js,
            JavaScript, MongoDB, React, and other cutting-edge technologies.
            <br></br>
            <br></br>
            My first professional step led me to META TEAM MYANMAR CO., LTD,
            where I served as a junior developer. During my tenure, I had the
            privilege of working on PHP and Node.js projects, contributing to
            their development and ensuring their smooth maintenance for a
            duration of one year and six months. This experience was invaluable
            in honing my technical prowess.<br></br>
            <br></br> Beyond my professional commitments, I find immense joy in
            sharing knowledge and mentoring newcomers to the world of
            technology. I'm particularly enthusiastic about exploring
            contemporary technologies like React, Vue, and Solid.js.
            <br></br> When I'm not immersed in the world of coding and
            technology, you'll often find me indulging in my hobbies, which
            include both coding challenges and the serene art of swimming.
            <br></br>
            <br></br> Currently, I'm dedicated to expanding my horizons even
            further. I'm actively pursuing proficiency in the Japanese language
            and exploring the exciting field of Artificial Intelligence through
            courses at Metro IT & Japanese Language Center. My ultimate goal is
            to bring my skills and passion to the dynamic tech scene of Japan,
            where I aspire to work and thrive for the foreseeable future.
            <br></br>
            <br></br> Thank you for taking a moment to get to know me and my
            aspirations.
          </p>
        </div>
        <div className="md:w-[25%] xs:w-full">
          <h2 className="text-2xl xs:text-xl">Personal Information</h2>
          <ul className="mt-3 xs:text-sm md:text-inherit !leading-7">
            <li className="flex">
              <span>Name :&nbsp;</span>
              <span>Wai Yan Lin</span>
            </li>
            <li className="flex">
              <span>Age :&nbsp;</span>
              <span>24 years</span>
            </li>
            <li className="flex">
              <span>Residence :&nbsp;</span>
              <span>Yangon, Myanmar</span>
            </li>
            <li className="flex">
              <span>Address :&nbsp;</span>
              <span>loream</span>
            </li>
            <li className="flex">
              <span>Phone :&nbsp;</span>
              <span>+959 981 499 455</span>
            </li>
            <li className="flex">
              <span>Freelance :&nbsp;</span>
              <span>+959 981 499 455</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 ">
        <h2 className="text-center">
          <span className="border-b pb-2 xs:text-xl text-2xl border-dashed">
            SERVICES
          </span>
        </h2>
        <div className="grid xs:grid-cols-1 md:grid-cols-3 gap-10 xs:gap-6 xs:mt-5 mt-10">
          <div className="text-center">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-20 h-20 xs:w-16 md:h-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                />
              </svg>
            </div>
            <h3 className="text-lg mt-3 xs:text-md">Web Development</h3>
            <p className="mt-3 text-center xs:text-sm md:text-inherit !leading-7">
              Amet aspernatur delectus maxime ducimus similique Ratione
              asperiores corporis provident aut libero
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-20 h-20 xs:w-16 md:h-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </div>
            <h3 className="text-lg mt-3 xs:text-md">Mobile Development</h3>
            <p className="mt-3 text-center xs:text-sm md:text-inherit !leading-7">
              Amet aspernatur delectus maxime ducimus similique Ratione
              asperiores corporis provident aut libero
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-20 h-20 xs:w-16 md:h-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                />
              </svg>
            </div>
            <h3 className="ext-lg mt-3 xs:text-md3">Comming Soon</h3>
            <p className="mt-3 text-center xs:text-sm md:text-inherit !leading-7">
              Amet aspernatur delectus maxime ducimus similique Ratione
              asperiores corporis provident aut libero
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
