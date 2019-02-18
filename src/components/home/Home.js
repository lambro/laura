import React, { Component } from 'react'
import posed from 'react-pose'
import styles from './Home.module.css'

const Container = posed.div({
  enter: { staggerChildren: 50 }
})

const Box = posed.div({
  open: { opacity: 1 },
  closed: { opacity: 0 }
})

class Home extends Component {
  state = {
    show: false
  }

  show = () => {
    this.setState({
      show: true
    })
  }

  getOutlineLength = () => {
    const path = document.querySelector('#shape0')
    return path ? path.getTotalLength() : 0
  }

  componentDidMount() {
    setTimeout(this.show, 700)
  }

  render() {
    const outlineLength = this.getOutlineLength()
    return (
      <Container className={styles.homePage}>
        <Box
          className={styles.inner}
          pose={this.state.show ? 'open' : 'closed'}
        >
          <div>
            <h1>
              <b>L</b>aura <br />
              <b>Amb</b>rose
            </h1>
            <h1>
              Front End <br />
              Web Engineer
            </h1>
          </div>
        </Box>
        <div className={styles.innerLamb}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1057.87 1814.78"
            className={styles.lambImage}
          >
            <defs />
            <path
              id="shape0"
              className={styles.outline}
              transform="matrix(1.0000000046157 0 0 0.999999983856515 5.30411787353431 7.58746264175132)"
              fill="none"
              stroke="#efefef"
              strokeWidth="9.99876746748237"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={`${outlineLength} ${outlineLength}`}
              strokeDashoffset={outlineLength}
              d="M655.081 1068.85C663.839 1085.28 675.456 1118.59 689.932 1168.78C694.689 1185.28 621.435 1392.47 611.861 1423.84C605.063 1446.11 604.806 1529.9 611.089 1675.21L625.997 1779.09C608.326 1791.66 595.269 1798.81 586.824 1800.55C576.885 1802.6 559.057 1800.56 533.341 1794.43L539.251 1740.48L531.193 1793.69C496.203 1796.58 473.294 1794.96 462.465 1788.83C456.849 1785.66 450.011 1775.91 441.949 1759.58C469.728 1730.12 486.707 1708.18 492.885 1693.75C501.367 1673.95 488.124 1431.4 489.496 1403.03C491.287 1366.03 568.335 1191.74 559.669 1169.19C555.62 1158.66 545.68 1140.47 529.848 1114.62C498.074 1126.96 463.845 1132.05 424.539 1122.14L437.522 1195.92L460.702 1407.49L449.696 1683.27L434.619 1719.74C436.107 1751.97 433.599 1770.97 427.097 1776.76C419.042 1783.92 395.299 1784.27 355.867 1777.8L375.393 1724.81L346.614 1779.36C321.438 1771.33 303.904 1764.91 294.013 1760.1C285.063 1755.75 281.986 1749.04 281.802 1746.1C281.01 1733.5 295.789 1711.51 326.138 1680.11L343.697 1398.38L321.571 1227.98L246.658 955.332C185.609 865.493 196.64 758.327 232.077 679.977C322.948 548.128 322.611 524.268 308.36 495.582C254.952 447.04 238.616 408.532 251 350.268C190.187 340.947 140.36 323.966 108.434 266.968C60.5954 216.03 -2.30496 156.053 0.0650304 114.803C90.0725 117.233 255.774 85.629 300.293 170.941C355.857 114.262 422.499 106.452 484.51 120.699C527.78 68.3875 569.708 71.2415 615.208 51.9887C660.015 19.2565 715.871 -14.2221 750.631 6.28522C762.775 49.1088 674.594 79.8092 685.692 138.022C693.102 199.718 656.699 241.853 614.759 270.948C609.718 370.23 612.058 400.324 598.065 449.512L582.105 476.972C570.227 517.384 579.505 516.63 588.443 543.056C702.554 446.716 951.272 411.557 934.297 766.86C987.111 916.873 1016.14 996.932 1021.38 1007.04C1027.24 1018.33 1036.65 1234.71 1035.59 1261.12C1035.01 1275.76 1028.22 1360.86 1015.24 1516.42C1040.1 1556.97 1050.27 1582.89 1045.74 1594.18C1041.4 1604.99 1013.08 1616.46 960.787 1628.59C960.477 1591.51 960.297 1571.08 960.245 1567.27C960.16 1561.09 955.702 1581.61 946.872 1628.85C899.904 1620.34 874.343 1611.69 870.19 1602.89C864.507 1590.85 876.672 1560.57 906.684 1512.06C925.254 1352.18 934.23 1265.26 933.611 1251.3C932.948 1236.33 898.934 1110.82 892.85 1095.93C889.146 1086.87 858.786 1052.4 801.772 992.538C761.908 1042.71 706.563 1061.65 653.891 1067.12"
            />
            <path
              id="shape1"
              className={styles.leg}
              transform="matrix(1.0000000046157 0 0 0.999999983856515 616.186276789652 1061.62577362466)"
              fill="none"
              stroke="#efefef"
              strokeWidth="9.99876746748237"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M104.132 0L129.136 212.501L74.801 397.406L49.5077 567.871L0 581.22"
            />
            <path
              id="shape2"
              className={styles.leg}
              transform="matrix(1.0000000046157 0 0 0.999999983856515 316.111536146888 458.035290247988)"
              fill="none"
              stroke="#efefef"
              strokeWidth="9.99876746748237"
              strokeLinecap="square"
              strokeLinejoin="bevel"
              d="M0 47.7944C80.4107 105.362 126.024 129.192 170.053 122.923C216.595 116.826 266.491 35.0182 285.352 0"
            />
            <path
              id="shape3"
              className={styles.leg}
              transform="matrix(1.0000000046157 0 0 0.999999983856515 436.572363094976 442.324195653925)"
              fill="none"
              stroke="#efefef"
              strokeWidth="9.99876746748237"
              strokeLinecap="round"
              strokeLinejoin="bevel"
              d="M0 9.2989L42.2578 34.8332C55.985 18.5777 65.7901 6.96664 71.6732 0"
            />
            <path
              id="shape4"
              className={styles.leg}
              transform="matrix(1.0000000046157 0 0 0.999999983856515 477.770746767648 478.824224197624)"
              fill="none"
              stroke="#efefef"
              strokeWidth="9.99876746748237"
              strokeLinecap="round"
              strokeLinejoin="bevel"
              d="M0 0L4.68139 48.5821"
            />
            <path
              id="shape5"
              className={styles.leg}
              transform="matrix(1.0000000046157 0 0 0.999999983856515 58.8466240258401 120.940891004067)"
              fill="none"
              stroke="#efefef"
              strokeWidth="9.99876746748237"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M0 0.145025C78.9097 -5.06862 126.048 131.952 196.671 143.168"
            />
            <path
              className={styles.leg}
              id="shape6"
              transform="matrix(1.0000000046157 0 0 0.999999983856515 558.584955252486 20.0657272849706)"
              fill="none"
              stroke="#efefef"
              strokeWidth="9.99876746748237"
              strokeLinecap="round"
              strokeLinejoin="bevel"
              d="M0 160.202C10.2863 154.782 22.9258 134.308 37.9188 98.7799C53.2967 62.3391 58.8581 81.9422 129.777 0"
            />
            <ellipse
              id="shape7"
              className={styles.eye}
              transform="matrix(1.0000000046157 0 0 0.999999983856515 286.964627641287 320.960430524764)"
              rx="16.497966321346"
              ry="16.4979663213459"
              cx="16.497966321346"
              cy="16.4979663213459"
              fill="none"
              stroke="#efefef"
              strokeWidth="9.99876746748237"
              strokeLinecap="square"
              strokeLinejoin="bevel"
            />
            <ellipse
              id="shape8"
              className={styles.eye}
              transform="matrix(1.0000000046157 0 0 0.999999983856515 555.931473758033 281.965238031101)"
              rx="15.9980279479719"
              ry="15.4980895745977"
              cx="15.9980279479719"
              cy="15.4980895745977"
              fill="none"
              stroke="#efefef"
              strokeWidth="9.99876746748237"
              strokeLinecap="square"
              strokeLinejoin="bevel"
            />
            <path
              id="shape9"
              className={styles.leg}
              transform="matrix(1.0000000046157 0 0 0.999999983856515 657.636568642825 657.952490466191)"
              fill="none"
              stroke="#efefef"
              strokeWidth="9.99876746748237"
              strokeLinecap="round"
              strokeLinejoin="bevel"
              d="M13.3728 271.868C44.9763 178.736 68.5322 88.298 0 0"
            />
            <path
              id="shape10"
              className={styles.leg}
              transform="matrix(1.0000000046157 0 0 0.999999983856515 772.49173754556 621.923326437392)"
              fill="none"
              stroke="#efefef"
              strokeWidth="9.99876746748237"
              strokeLinecap="round"
              strokeLinejoin="bevel"
              d="M0 0C22.4367 14.5295 119.383 114.698 111.41 199.637M111.41 199.637C107.355 266.652 64.953 328.843 53.2361 340.633"
            />
            <path
              id="shape11"
              className={styles.leg}
              transform="matrix(1.0000000046157 0 0 0.999999983856515 487.92305245259 743.628876485611)"
              fill="none"
              stroke="#efefef"
              strokeWidth="9.99876746748237"
              strokeLinecap="round"
              strokeLinejoin="bevel"
              d="M108.792 0C134.566 96.5878 59.0674 235.155 0 270.967"
            />
            <path
              id="shape12"
              className={styles.leg}
              transform="matrix(1.0000000046157 0 0 0.999999983856515 253.595437548277 963.570247990542)"
              fill="none"
              stroke="#efefef"
              strokeWidth="9.99876746748237"
              strokeLinecap="round"
              strokeLinejoin="bevel"
              d="M0 0C28.3323 28.3573 68.4979 46.3479 96.5032 55.2939"
            />
          </svg>
        </div>
      </Container>
    )
  }
}

export default Home
