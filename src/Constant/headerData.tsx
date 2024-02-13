import { Drop, Icone } from 'Styles/Header'
import { MenuProps } from 'antd'
import { Link } from 'react-router-dom'

export const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link to={`/Noise/Earbuds`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1693395091/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/300412_qvbsi3.png?tr=w-640'
            }
          />
          <span>Noise</span>
        </Drop>
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to={`/Apple/Earbuds`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694672652/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/301165_xzuxl0.png?tr=w-640'
            }
          />
          <span>Apple</span>
        </Drop>
      </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link to={`/boAt/Earbuds`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1674044370/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/231628_0_zxekxq.png?tr=w-640'
            }
          />
          <span>Boat </span>
        </Drop>
      </Link>
    ),
  },
  {
    key: '4',
    label: (
      <Link to={`/Samsung/Earbuds`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1695901637/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/260678_12_cd5tju.png?tr=w-640'
            }
          />
          <span>Samsung</span>
        </Drop>
      </Link>
    ),
  },

  {
    key: '5',
    label: (
      <Link to={`/Oppo/Earbuds`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1665584082/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/262621_xtpnox.png?tr=w-640'
            }
          />
          <span>Oppo</span>
        </Drop>
      </Link>
    ),
  },
  {
    key: '6',
    label: (
      <Link to={`/Realme/Earbuds`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697016336/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/300119_0_enlffn.png?tr=w-640'
            }
          />
          <span>Realme</span>
        </Drop>
      </Link>
    ),
  },
  {
    key: '7',
    label: (
      <Link to={`/OnePlus/Earbuds`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697021327/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/274975_0_pgsjer.png?tr=w-640'
            }
          />
          <span>OnePlus</span>
        </Drop>
      </Link>
    ),
  },
  {
    key: '8',
    label: (
      <Link to={`/Boult/Earbuds`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1682594242/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/267241_0_qmadmb.png?tr=w-640'
            }
          />
          <span>Boult</span>
        </Drop>
      </Link>
    ),
  },
]

type MenuItem = Required<MenuProps>['items'][number]
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

export const items4: MenuItem[] = [
  getItem('Earbuds', '1', '', [
    getItem(
      <Link to={`/Noise/Earbuds`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1693395091/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/300412_qvbsi3.png?tr=w-640'
            }
          />
          <span>Noise</span>
        </Drop>
      </Link>,
      '2',
    ),
    getItem(
      <Link to={`/Apple/Earbuds`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694672652/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/301165_xzuxl0.png?tr=w-640'
            }
          />
          <span>Apple</span>
        </Drop>
      </Link>,
      '3',
    ),
    getItem(
      <Link to={`/boAt/Earbuds`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1674044370/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/231628_0_zxekxq.png?tr=w-640'
            }
          />
          <span>Boat </span>
        </Drop>
      </Link>,
      '4',
    ),
    getItem(
      <Link to={`/Samsung/Earbuds`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1695901637/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/260678_12_cd5tju.png?tr=w-640'
            }
          />
          <span>Samsung</span>
        </Drop>
      </Link>,
      '5',
    ),
    getItem(
      <Link to={`/Oppo/Earbuds`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1665584082/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/262621_xtpnox.png?tr=w-640'
            }
          />
          <span>Oppo</span>
        </Drop>
      </Link>,
      '6',
    ),
    getItem(
      <Link to={`/Realme/Earbuds`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697016336/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/300119_0_enlffn.png?tr=w-640'
            }
          />
          <span>Realme</span>
        </Drop>
      </Link>,
      '7',
    ),
    getItem(
      <Link to={`/OnePlus/Earbuds`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697021327/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/274975_0_pgsjer.png?tr=w-640'
            }
          />
          <span>OnePlus</span>
        </Drop>
      </Link>,
      '8',
    ),
    getItem(
      <Link to={`/Boult/Earbuds`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1682594242/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/267241_0_qmadmb.png?tr=w-640'
            }
          />
          <span>Boult</span>
        </Drop>
      </Link>,
      '9',
    ),
  ]),
  getItem('Smartwatch', '10', '', [
    getItem(
      <Link to={`/Noise/Smartwatch`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701616314/Croma%20Assets/Communication/Wearable%20Devices/Images/273833_0_wtbmiz.png?tr=w-640'
            }
          />
          <span>Noise</span>
        </Drop>
      </Link>,
      '11',
    ),
    getItem(
      <Link to={`/Apple/Smartwatch`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1677844969/Croma%20Assets/Miscellanous/5K%20SKU_Images/Images/243563_2_bbpxsf.png?tr=w-640'
            }
          />
          <span>Apple</span>
        </Drop>
      </Link>,
      '12',
    ),
    getItem(
      <Link to={`/boAt/Smartwatch`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701615047/Croma%20Assets/Communication/Wearable%20Devices/Images/301656_0_mwallh.png?tr=w-640'
            }
          />
          <span>Boat</span>
        </Drop>
      </Link>,
      '13',
    ),
    getItem(
      <Link to={`/Samsung/Smartwatch`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675187472/Croma%20Assets/Communication/Wearable%20Devices/Images/260632_0_gkm677.png?tr=w-640'
            }
          />
          <span>Samsung</span>
        </Drop>
      </Link>,
      '14',
    ),
    getItem(
      <Link to={`/Fastrack/Smartwatch`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685017033/Croma%20Assets/Communication/Wearable%20Devices/Images/270157_3_gkn4ii.png?tr=w-640'
            }
          />
          <span>Fastrack</span>
        </Drop>
      </Link>,
      '15',
    ),
    getItem(
      <Link to={`/Nothing/Smartwatch`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701326594/Croma%20Assets/Wearable/Wearable%20Devices/Images/303132_3_jqmns8.png?tr=w-640'
            }
          />
          <span>Nothing</span>
        </Drop>
      </Link>,
      '16',
    ),
    getItem(
      <Link to={`/Fire-Boltt/Smartwatch`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689335804/Croma%20Assets/Communication/Wearable%20Devices/Images/273179_0_skf57x.png?tr=w-640'
            }
          />
          <span>Fire-Boltt</span>
        </Drop>
      </Link>,
      '17',
    ),
    getItem(
      <Link to={`/Titan/Smartwatch`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1706344385/Croma%20Assets/Wearable/Wearable%20Devices/Images/302932_3_i1nkdo.png?tr=w-640'
            }
          />
          <span>Titan</span>
        </Drop>
      </Link>,
      '18',
    ),
  ]),
  getItem('Headphone', '19', '', [
    getItem(
      <Link to={`/Sony/Headphone`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1669124952/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/262566_0_emihyi.png?tr=w-640'
            }
          />
          <span>Sony</span>
        </Drop>
      </Link>,
      '20',
    ),
    getItem(
      <Link to={`/Apple/Headphone`}>
        <Drop>
          <Icone
            src={
              'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-pink-202011?wid=470&hei=556&fmt=png-alpha&.v=1604022365000'
            }
          />
          <span>Apple</span>
        </Drop>
      </Link>,
      '21',
    ),
    getItem(
      <Link to={`/boAt/Headphone`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1669289573/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/220170_0_smtn0l.png?tr=w-640'
            }
          />
          <span>Boat</span>
        </Drop>
      </Link>,
      '22',
    ),
    getItem(
      <Link to={`/JBL/Headphone`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689156597/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/226126_omlp7g.png?tr=w-640'
            }
          />
          <span>JBL</span>
        </Drop>
      </Link>,
      '23',
    ),
    getItem(
      <Link to={`/Zebronics/Headphone`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1674054338/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/246376_0_dwvdsc.png?tr=w-640'
            }
          />
          <span>ZEBRONICS</span>
        </Drop>
      </Link>,
      '24',
    ),
    getItem(
      <Link to={`/Philips/Headphone`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1674050420/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/253061_0_p9qlbk.png?tr=w-640'
            }
          />
          <span>Philips</span>
        </Drop>
      </Link>,
      '25',
    ),
    getItem(
      <Link to={`/Bose/Headphone`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1674044768/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/250473_0_kilfds.png?tr=w-640'
            }
          />
          <span>Bose</span>
        </Drop>
      </Link>,
      '26',
    ),
    getItem(
      <Link to={`/Chroma/Headphone`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1674045768/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/239032_0_ogo1io.png?tr=w-640'
            }
          />
          <span>Chroma</span>
        </Drop>
      </Link>,
      '27',
    ),
  ]),
  getItem(
    <Link to={`/products`}>
      <span>Shope</span>
    </Link>,
    '28',
  ),
]

export const items2: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link to={`/Noise/Smartwatch`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701616314/Croma%20Assets/Communication/Wearable%20Devices/Images/273833_0_wtbmiz.png?tr=w-640'
            }
          />
          <span>Noise</span>
        </Drop>
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to={`/Apple/Smartwatch`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1677844969/Croma%20Assets/Miscellanous/5K%20SKU_Images/Images/243563_2_bbpxsf.png?tr=w-640'
            }
          />
          <span>Apple</span>
        </Drop>
      </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link to={`/boAt/Smartwatch`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701615047/Croma%20Assets/Communication/Wearable%20Devices/Images/301656_0_mwallh.png?tr=w-640'
            }
          />
          <span>Boat</span>
        </Drop>
      </Link>
    ),
  },
  {
    key: '4',
    label: (
      <Link to={`/Samsung/Smartwatch`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675187472/Croma%20Assets/Communication/Wearable%20Devices/Images/260632_0_gkm677.png?tr=w-640'
            }
          />
          <span>Samsung</span>
        </Drop>
      </Link>
    ),
  },

  {
    key: '5',
    label: (
      <Link to={`/Fastrack/Smartwatch`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685017033/Croma%20Assets/Communication/Wearable%20Devices/Images/270157_3_gkn4ii.png?tr=w-640'
            }
          />
          <span>Fastrack</span>
        </Drop>
      </Link>
    ),
  },
  {
    key: '6',
    label: (
      <Link to={`/Nothing/Smartwatch`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701326594/Croma%20Assets/Wearable/Wearable%20Devices/Images/303132_3_jqmns8.png?tr=w-640'
            }
          />
          <span>Nothing</span>
        </Drop>
      </Link>
    ),
  },
  {
    key: '7',
    label: (
      <Link to={`/Fire-Boltt/Smartwatch`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689335804/Croma%20Assets/Communication/Wearable%20Devices/Images/273179_0_skf57x.png?tr=w-640'
            }
          />
          <span>Fire-Boltt</span>
        </Drop>
      </Link>
    ),
  },
  {
    key: '8',
    label: (
      <Link to={`/Titan/Smartwatch`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1706344385/Croma%20Assets/Wearable/Wearable%20Devices/Images/302932_3_i1nkdo.png?tr=w-640'
            }
          />
          <span>Titan</span>
        </Drop>
      </Link>
    ),
  },
]

export const items3: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link to={`/Sony/Headphone`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1669124952/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/262566_0_emihyi.png?tr=w-640'
            }
          />
          <span>Sony</span>
        </Drop>
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to={`/Apple/Headphone`}>
        <Drop>
          <Icone
            src={
              'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-pink-202011?wid=470&hei=556&fmt=png-alpha&.v=1604022365000'
            }
          />
          <span>Apple</span>
        </Drop>
      </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link to={`/boAt/Headphone`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1669289573/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/220170_0_smtn0l.png?tr=w-640'
            }
          />
          <span>Boat</span>
        </Drop>
      </Link>
    ),
  },
  {
    key: '4',
    label: (
      <Link to={`/JBL/Headphone`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689156597/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/226126_omlp7g.png?tr=w-640'
            }
          />
          <span>JBL</span>
        </Drop>
      </Link>
    ),
  },

  {
    key: '5',
    label: (
      <Link to={`/Zebronics/Headphone`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1674054338/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/246376_0_dwvdsc.png?tr=w-640'
            }
          />
          <span>ZEBRONICS</span>
        </Drop>
      </Link>
    ),
  },
  {
    key: '6',
    label: (
      <Link to={`/Philips/Headphone`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1674050420/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/253061_0_p9qlbk.png?tr=w-640'
            }
          />
          <span>Philips</span>
        </Drop>
      </Link>
    ),
  },
  {
    key: '7',
    label: (
      <Link to={`/Bose/Headphone`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1674044768/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/250473_0_kilfds.png?tr=w-640'
            }
          />
          <span>Bose</span>
        </Drop>
      </Link>
    ),
  },
  {
    key: '8',
    label: (
      <Link to={`/Chroma/Headphone`}>
        <Drop>
          <Icone
            src={
              'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1674045768/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/239032_0_ogo1io.png?tr=w-640'
            }
          />
          <span>Chroma</span>
        </Drop>
      </Link>
    ),
  },
]
