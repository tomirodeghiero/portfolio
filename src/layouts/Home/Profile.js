import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there, I'm Tomás" start={visible} delay={500} />
    </Heading>

    {/* prettier-ignore */}
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I currently serve as a Software Developer at <Link href="https://futitservices.com">Futit Services</Link>, 
      where I blend my frontend expertise with backend know-how to create seamless digital experiences.
      Alongside my professional work, I'm furthering my education at the National
      University of Río Cuarto. I firmly believe that the cornerstone of extraordinary
      projects and products lies in cohesive and dynamic teams collaborating,
      experimenting, and learning together fuels my commitment to collective success.
      
      {/* If you’re interested in the tools and software I use check out my <Link href="/uses">uses page</Link>. */}
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I'm always keen to explore new opportunities and ideas, so feel free to reach out if
      you'd like to discuss potential collaborations or simply share your thoughts!
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="https://wa.me/5493586020441"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan"
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
