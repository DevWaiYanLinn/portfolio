import PorgressBar from "./_components/ProgressBar";

export default function Page() {
  return (
    <div className="xs:mt-20 md:mt-5 mb-10 space-y-10">
      <div>
        <h2 className="text-center uppercase">
          <span className="border-b pb-2 xs:text-xl text-2xl border-dashed font-serif">
            Experience
          </span>
        </h2>
        <div className="mt-8 relative">
          <h2 className="xs:text-lg font-serif uppercase">Backend Developer</h2>
          <span className="text-xs opacity-50">
          META TEAM MYANMAR CO., LTD (2022-2023)
          </span>
          <p className="leading-7 text-sm">
            Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis
            eveniet provident neque Ea ratione non minus temporibus ipsum Sunt
            minima
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-center uppercase">
          <span className="border-b pb-2 xs:text-xl text-2xl border-dashed font-serif">
            Education
          </span>
        </h2>
        <div className="mt-8 relative">
          <h2 className="xs:text-lg font-serif uppercase">
            B.C.Sc. (Software Engineering)
          </h2>
          <span className="text-xs opacity-50 uppercase"> 
            UCSMUB (2022-2023)
          </span>
          <p className="leading-7 text-sm">
            Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis
            eveniet provident neque Ea ratione non minus temporibus ipsum Sunt
            minima
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-center">
          <span className="border-b pb-2 xs:text-xl text-2xl border-dashed font-serif">
            CODING SKILLS
          </span>
        </h2>
        <div className="mt-8 space-y-5">
          <PorgressBar name="HTML" color="bg-orange-500" progress={90} />
          <PorgressBar name="CSS" color="bg-blue-500" progress={70} />
          <PorgressBar name="Javascript" color="bg-yellow-500" progress={80} />
          <PorgressBar name="PHP" color="bg-purple-500" progress={90} />
          <PorgressBar name="NodeJS" color="bg-green-500" progress={80} />
        </div>
      </div>
      <div>
        <h2 className="text-center">
          <span className="border-b pb-2 xs:text-xl text-2xl border-dashed font-serif">
            FRAMEWORK SKILLS
          </span>
        </h2>
        <div className="mt-8 space-y-5">
          <PorgressBar name="Laravel" color="bg-red-500" progress={90} />
          <PorgressBar name="React" color="bg-blue-500" progress={90} />
          <PorgressBar name="Express" color="bg-yellow-500" progress={90} />
          <PorgressBar name="Interia" color="bg-indigo-500" progress={80} />
          <PorgressBar name="Vue" color="bg-green-500" progress={80} />
        </div>
      </div>
    </div>
  );
}
