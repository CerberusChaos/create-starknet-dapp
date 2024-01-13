import Link from 'next/link';

import { Banner } from '@/components/Banner';
import { Logo } from '@/components/Logo';
import { Navbar } from '@/components/Navbar';
import { Section } from '@/components/Section';
import SupportGithub from '@/components/SupoortGithub';
import type { IVerticalFeatureRowProps } from '@/components/VerticalRow';
import { VerticalRow } from '@/components/VerticalRow';
import WalletBar from '@/components/WalletConnect';

import { Footer } from '../layout/Footer';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

const verticalFeatureRowData = [
  {
    title: 'Modern Tech: React, Next.js, TailwindCSS',
    description:
      'Our template employs React, Next.js, and TailwindCSS for dynamic, responsive dApp design.',
    image: '/assets/images/assets1.svg',
    imageAlt: 'First feature alt text',
  },
  {
    title: 'Stylish UI with DaisyUI',
    description:
      "Enhance your dApp's user experience with beautiful interfaces, thanks to our template's integration of the daisyUI library. This feature enables you to craft intuitive and aesthetically pleasing designs, making your dApp not only functional but also visually engaging.",
    image: '/assets/images/assets2.svg',
    imageAlt: 'Second feature alt text',
    reverse: true,
  },
  {
    title: 'Ready-to-Use Components & Hooks',
    description:
      'Our template is equipped with an array of pre-built components and custom hooks, designed to accelerate your development process. From wallet connection utilities to various essential hooks, these ready-to-use elements enable rapid feature integration, greatly enhancing your productivity and reducing development time.',
    image: '/assets/images/assets3.svg',
    imageAlt: 'Third feature alt text',
  },
];

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <div className="bg-gray-100">
      <Section yPadding="py-6">
        <Navbar logo={<Logo />}>
          <li>
            <SupportGithub />
          </li>
          <li>
            <WalletBar />
          </li>
        </Navbar>
      </Section>

      <Section yPadding="pt-20 pb-32">
        <header className="text-center">
          <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-gray-900">
            {'Build swiftly, perform brilliantly.\n'}
            <span className="text-[#9A73B5]">
              Your gateway to premiere StarkNet dApps.
            </span>
          </h1>
          <div className="mb-16 mt-4 text-2xl">
            Welcome to the Future with StarkNet Dapp Template
          </div>

          <div className="btn-wallet btn btn-lg ml-4">
            Get Started By Editing `pages/index.tsx`
          </div>
        </header>
      </Section>
    </div>
    <Section
      title="Instant StarkNet Dapp Setup"
      description="Quickly initialize StarkNet dApp projects using our GitHub template for immediate development."
    >
      {verticalFeatureRowData.map(
        (item: IVerticalFeatureRowProps, index: number) => (
          <VerticalRow
            title={item.title}
            description={item.description}
            image={item.image}
            imageAlt={item.imageAlt}
            reverse={item.reverse}
            key={index}
          />
        ),
      )}
    </Section>
    <Section>
      <Banner
        title="Starknet is the secure scaling technology bringing Ethereum’s benefits to the world."
        subtitle=""
        button={
          <Link href="https://www.starknet.io/" target="__blank">
            <div className="btn-wallet btn">Build on Starknet</div>
          </Link>
        }
      />
    </Section>
    <Footer />
  </div>
);

export { Base };
