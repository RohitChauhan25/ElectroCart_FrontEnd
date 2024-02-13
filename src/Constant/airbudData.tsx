import air1 from 'Assets/AirbudImage/airbud.webp'
import air2 from 'Assets/AirbudImage/airbud2.webp'
import air3 from 'Assets/AirbudImage/airbud3.webp'
import air4 from 'Assets/AirbudImage/airbud4.webp'
import watch1 from 'Assets/AirbudImage/boAt-Storm.webp'
import watch2 from 'Assets/AirbudImage/watch2.webp'
import watch3 from 'Assets/AirbudImage/watch3.webp'
import watch4 from 'Assets/AirbudImage/watch4.webp'

import head1 from 'Assets/AirbudImage/head1.webp'
import head2 from 'Assets/AirbudImage/head2.webp'
import head3 from 'Assets/AirbudImage/head3.gif'
import head4 from 'Assets/AirbudImage/head4.webp'
import { Drop, Icone } from 'Styles/Header'
import { MenuProps } from 'antd'

export const Airbuds = [
  {
    name: 'Airdopes 131',
    image: air1,
    price: 3990,
    off: 70,
    playback: 40,
  },
  {
    name: 'Airdopes 131',
    image: air2,
    price: 2590,
    off: 60,
    playback: 40,
  },
  {
    name: 'Airdopes 131',
    image: air3,
    price: 2990,
    off: 50,
    playback: 20,
  },
  {
    name: 'Airdopes 131',
    image: air4,
    price: 2990,
    off: 70,
    playback: 24,
  },
  // {
  //   name: 'Airdopes 131',
  //   image: air2,
  //   price: 2990,
  //   off: 70,
  //   playback: 40,
  // },
  // {
  //   name: 'Airdopes 131',
  //   image: air3,
  //   price: 2990,
  //   off: 70,
  //   playback: 40,
  // },
  // {
  //   name: 'Airdopes 131',
  //   image: air4,
  //   price: 2990,
  //   off: 70,
  //   playback: 40,
  // },
]

export const Watches = [
  {
    name: 'Storm',
    image: watch1,
    price: 5990,
    off: 70,
    playback: 'Activity Tracker',
  },
  {
    name: 'Wave call',
    image: watch2,
    price: 2990,
    off: 20,
    playback: 'BT calling',
  },
  {
    name: 'Xtend',
    image: watch3,
    price: 3490,
    off: 30,
    playback: 'Elexa Enabled',
  },
  {
    name: 'Storm call',
    image: watch4,
    price: 2990,
    off: 80,
    playback: 'BT Calling',
  },
]

export const HeadphonesData = [
  {
    name: 'Nirvanaa 751 ANC',
    image: head1,
    price: 2990,
    off: 20,
    playback: 65,
  },
  {
    name: 'Rockerz 551ANC',
    image: head2,
    price: 1990,
    off: 35,
    playback: 100,
  },
  {
    name: 'Immortal 400',
    image: head3,
    price: 1690,
    off: 50,
    playback: 40,
  },
  {
    name: 'Immortal 200',
    image: head4,
    price: 2490,
    off: 70,
    playback: 45,
  },
]

export const AirbudsData: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Drop>
        <Icone
          src={
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/p/0/p/-original-imagp6skfbnypq5g.jpeg?q=70&crop=false'
          }
        />
        <span>Noise</span>
      </Drop>
    ),
  },
  {
    key: '1',
    label: (
      <Drop>
        <Icone
          src={
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/e/a/f/-original-imagtc44nk4b3hfg.jpeg?q=70&crop=false'
          }
        />
        <span>Apple</span>
      </Drop>
    ),
  },
  {
    key: '1',
    label: (
      <Drop>
        <Icone
          src={
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/t/j/u/-original-imagqre8hcncxaxk.jpeg?q=70&crop=false'
          }
        />
        <span>Boat </span>
      </Drop>
    ),
  },
  {
    key: '1',
    label: (
      <Drop>
        <Icone
          src={
            'https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-buds2-r177-sm-r177nlvainu-481740555?$2052_1641_PNG$'
          }
        />
        <span>Samsung</span>
      </Drop>
    ),
  },

  {
    key: '1',
    label: (
      <Drop>
        <Icone
          src={
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/p/r/z/enco-buds-2-oppo-original-imagh9frfp7gxdb3.jpeg?q=70&crop=false'
          }
        />
        <span>Oppo</span>
      </Drop>
    ),
  },
  {
    key: '1',
    label: (
      <Drop>
        <Icone
          src={
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/v/y/o/-original-imagt3vwuweuwk9v.jpeg?q=70&crop=false'
          }
        />
        <span>Realme</span>
      </Drop>
    ),
  },
  {
    key: '1',
    label: (
      <Drop>
        <Icone
          src={
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/v/y/o/-original-imagt3vwuweuwk9v.jpeg?q=70&crop=false'
          }
        />
        <span>One Plus</span>
      </Drop>
    ),
  },
  {
    key: '1',
    label: (
      <Drop>
        <Icone
          src={
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/h/z/y/-original-imagx9sjpqcjvbzp.jpeg?q=70&crop=false'
          }
        />
        <span>Boult</span>
      </Drop>
    ),
  },
]
