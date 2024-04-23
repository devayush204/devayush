import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import data, { softData } from '../(data)/SkillsData';

const Skills = () => {
    const [skillsData, setSkillsData] = useState(data);
    const [softSkillData, setSoftSkillData] = useState(softData);

    const [showSkillCard, setShowSkillCard] = useState(true);

    const handleShowSkillCard = () => {
        setShowSkillCard(true);
    };

    const handleShowSoftSkill = () => {
        setShowSkillCard(false);
    };

    return (
        <section id="skills" className=" py-24 px-10 xl:px-48">
            <div className="flex flex-col items-center">
                <div className="flex gap-5">
                    <button
                        onClick={handleShowSkillCard}
                        className={`text-lg px-5 py-2 rounded-xl  text-white ${
                            showSkillCard ? 'bg-[#262626]  ' : 'bg-[#191919] border-[1px] border-[#262626]'
                        }`}
                    >
                        Coding Skills
                    </button>
                    <button
                        onClick={handleShowSoftSkill}
                        className={`text-lg px-5 py-2 rounded-xl  text-white ${
                            !showSkillCard ? 'bg-[#262626]  ' : 'bg-[#191919] border-[1px] border-[#262626]'
                        }`}
                    >
                        Soft Skills
                    </button>
                </div>

                <div className="container mx-auto mt-7">
                    <div className={`grid grid-cols-2 md:grid-cols-3   xl:gap-10 gap-3 md:gap-5 `}>
                        {showSkillCard
                            ? skillsData.map((item, index) => (
                                  <div
                                      key={index}
                                      className={`bg-[#262626] p-4 py-6 md:p-6 xl:p-10 xl:gap-12 gap-5 flex flex-col rounded-2xl`}
                                  >
                                      <i className={`fas ${item.icon} text-white text-lg md:text-3xl xl:text-4xl`}></i>
                                      <div className='flex flex-col gap-2'>
                                          <p className='text-base md:text-lg text-white/50 md:text-white font-bold'>{item.title}</p>
                                          <p className='hidden md:block text-white/50 '>{item.description}</p>
                                      </div>
                                  </div>
                              ))
                            : softSkillData.map((item, index) => (
                                  <div
                                      key={index}
                                      className={`bg-[#262626] p-4 py-6 md:p-6 xl:p-10 xl:gap-12 gap-5 flex flex-col rounded-2xl`}
                                  >
                                      <i className={`fas ${item.icon} text-white text-lg md:text-3xl xl:text-4xl`}></i>
                                      <div className='flex flex-col gap-2'>
                                          <p className='text-base md:text-lg text-white/50 md:text-white font-bold'>{item.title}</p>
                                          <p className='hidden md:block text-white/50 '>{item.description}</p>
                                      </div>
                                  </div>
                              ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
