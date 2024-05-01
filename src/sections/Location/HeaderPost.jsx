import React from 'react';
import MPProfile from '../../../public/img/MPProfile.jpg';

const HeaderPost = () => {
  return (
    <section className="bg-black p-2 flex items-center gap-x-4 w-full rounded-t-md">
      <div className="rounded-full overflow-hidden bg-gray-700 size-11">
        {/* <img src={MPProfile} alt="profilePh" /> */}
        <img src="/img/MPProfile.jpg" alt="asd" />
      </div>
      <div>
        <h1 className="text-white text-sm md:text-md">Melissa&Pedro</h1>
        <h1 className="text-stone-200 text-sm font-extralight">Ipiales, Nariño</h1>
      </div>
    </section>
  );
};

export default HeaderPost;