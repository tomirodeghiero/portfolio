import gamestackTexture2Large from 'assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/gamestack-list.jpg';
import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/gamestack-login.jpg';
import sliceTextureLarge from 'assets/slice-app-large.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceTexture from 'assets/slice-app.jpg';
import sprTextureLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from 'assets/spr-lesson-builder-dark.jpg';
import dpastelTextureLarge from 'assets/dpastel-large.jpg';
import dpastelTexturePlaceholder from 'assets/dpastel-placeholder.jpg';
import dpastelTexture from 'assets/dpastel.jpg';
import bricchiTextureLarge from 'assets/bricchi-large.jpg';
import bricchiTexturePlaceholder from 'assets/bricchi-placeholder.jpg';
import bricchiTexture from 'assets/bricchi.jpg';

import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Software', 'Frontend', 'Backend', 'Full Stack'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, projectFive, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Software + Developer"
        description="Design portfolio of Tomás Rodeghiero — a product software developer working on web & mobile
          apps with a focus on motion, experience design, and accessibility."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        proyect="Sophilum"
        title="Creative and Professional Lighting"
        description="Designing a unique lighting experience, combining technology and design to transform spaces."
        buttonText="View E-commerce"
        buttonLink="https://sophilum.vercel.app"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [sprTexture, sprTextureLarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        proyect="Etendo Time Tracking"
        title="Streamlining Worklog Management built with React Native"
        description="A specialized time tracking application tailored for Futit Services, Etendo Time Tracking efficiently manages employee worklogs."
        buttonText="View proyect"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        proyect="Joyas Boulevard"
        title="A Symphony of Luxury and Artistry"
        description="Joyas Boulevard offers a unique jewelry shopping experience, renowned for its elegance and innovative design."
        buttonText="View website"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        proyect="D-pastel"
        title="Lighting that Transforms Your Spaces with a Personalized Touch"
        description="Arte Luz specializes in illuminating your spaces with a personalized touch. We offer decorative and functional lighting solutions, transforming every corner of your home or business with unique, handcrafted designs."
        buttonText="View website"
        buttonLink="https://www.artedpastel.com"
        model={{
          type: 'laptop',
          alt: 'D-pastel website',
          textures: [
            {
              srcSet: [dpastelTexture, dpastelTextureLarge],
              placeholder: dpastelTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        alternate
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        proyect="Bricchi Hnos."
        title="Farming Tools and Machinery"
        description="Bricchi Hnos. offers high-quality farming equipment, featuring a wide range of products for efficient agricultural work."
        buttonText="View website"
        buttonLink="https://www.bricchihnos.com"
        model={{
          type: 'laptop',
          alt: 'Bricchi Hnos. website',
          textures: [
            {
              srcSet: [bricchiTexture, bricchiTextureLarge],
              placeholder: bricchiTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
