import * as React from "react"
import Svg, { Rect, G, Path, Circle, Defs, ClipPath, LinearGradient, Stop } from "react-native-svg"

export const AddExpenseIcon = (props) => {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      {...props}
    >
      <Path
        d="M23.547 13H2.453M13 2.453v21.094V2.453z"
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const BellIcon = (props) => {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      {...props}
    >
      <Rect
        width={40}
        height={40}
        rx={6.66667}
        fill="#fff"
        fillOpacity={0.06}
      />
      <G clipPath="url(#clip0_1_730)">
        <Path
          d="M20 31.667a2.916 2.916 0 002.917-2.917h-5.834A2.917 2.917 0 0020 31.667z"
          fill="#fff"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 11.13l-1.162.235a5.836 5.836 0 00-4.671 5.718c0 .916-.196 3.204-.67 5.457-.233 1.119-.548 2.284-.966 3.293H27.47c-.419-1.009-.732-2.173-.967-3.293-.474-2.253-.67-4.54-.67-5.457a5.836 5.836 0 00-4.67-5.716L20 11.129v.001zm9.07 14.703c.326.652.702 1.169 1.138 1.459H9.792c.436-.29.812-.807 1.137-1.459 1.313-2.625 1.78-7.466 1.78-8.75a7.294 7.294 0 015.84-7.147 1.46 1.46 0 012.043-1.479 1.458 1.458 0 01.86 1.479 7.294 7.294 0 015.84 7.147c0 1.284.466 6.125 1.779 8.75z"
          fill="#fff"
        />
        <Circle cx={25.8334} cy={14.1667} r={4.16667} fill="#FFAB7B" />
      </G>
      <Defs>
        <ClipPath id="clip0_1_730">
          <Path
            fill="#fff"
            transform="translate(8.333 8.333)"
            d="M0 0H23.3333V23.3333H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export const DateIcon = (props) => {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 0a1 1 0 00-1 1v1H2a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2h-1V1a1 1 0 10-2 0v1H5V1a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H4z"
        fill="#888"
      />
    </Svg>
  )
};
export const HomeIconFilled = (props) => {
  return (
    <Svg
      width={30}
      height={31}
      viewBox="0 0 30 31"
      fill="none"
      {...props}
    >
      <Path
        d="M19.5 30.098v-7.5a4.5 4.5 0 10-9 0v7.5H3a3 3 0 01-3-3V10.796a3 3 0 011.457-2.573l12-7.2a3 3 0 013.087 0l12 7.2A3 3 0 0130 10.795v16.303a3 3 0 01-3 3h-7.5z"
        fill="url(#paint0_linear_1_490)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1_490"
          x1={15}
          y1={0.595459}
          x2={15}
          y2={30.0975}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#549994" />
          <Stop offset={1} stopColor="#408782" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
};

export const HomeIconWithoutFilled = (props) => {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      {...props}
    >
      <Path
        d="M26.958 27V10.698l-11.583-7.2-11.583 7.2V27h5.791v-4.125a6.11 6.11 0 011.697-4.243 5.692 5.692 0 014.095-1.757c1.536 0 3.01.632 4.095 1.757a6.111 6.111 0 011.697 4.243V27h5.791zm-8.687 3v-7.125c0-.796-.305-1.559-.848-2.121a2.846 2.846 0 00-2.048-.879c-.768 0-1.505.316-2.048.879a3.056 3.056 0 00-.848 2.121V30H3.792a2.846 2.846 0 01-2.048-.879A3.055 3.055 0 01.896 27V10.698c0-.518.13-1.027.376-1.478.246-.45.6-.828 1.03-1.094l11.583-7.2a2.82 2.82 0 011.49-.428c.525 0 1.04.148 1.49.428l11.583 7.2c.429.266.784.643 1.03 1.094.247.45.376.96.376 1.478V27c0 .796-.305 1.559-.848 2.121a2.846 2.846 0 01-2.048.879h-8.687z"
        fill="#AAA"
      />
    </Svg>
  )
};
export const WalletFilledIcon = (props) =>{
    return (
      <Svg
        width={29}
        height={26}
        viewBox="0 0 29 26"
        fill="none"
        {...props}
      >
        <Path
          d="M25.875 5.125h-22.5a1.125 1.125 0 010-2.25H22.5a1.125 1.125 0 100-2.25H3.375A3.39 3.39 0 000 4v18a3.389 3.389 0 003.375 3.375h22.5a2.25 2.25 0 002.25-2.25V7.375a2.25 2.25 0 00-2.25-2.25zm-5.063 11.813a1.687 1.687 0 110-3.375 1.687 1.687 0 010 3.374z"
          fill="url(#paint0_linear_1_2760)"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_1_2760"
            x1={14.0625}
            y1={0.625}
            x2={14.0625}
            y2={25.375}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#549994" />
            <Stop offset={1} stopColor="#408782" />
          </LinearGradient>
        </Defs>
      </Svg>
    )
}

export const WalletWithoutFilledIcon = (props)=> {
  return (
    <Svg
      width={27}
      height={26}
      viewBox="0 0 27 26"
      fill="none"
      {...props}
    >
      <Path
        d="M.93 4v18c0 .597.229 1.169.636 1.591.407.422.96.659 1.536.659H24.82c.288 0 .564-.119.768-.33.204-.21.318-.497.318-.795V7.375c0-.298-.114-.585-.318-.795a1.067 1.067 0 00-.768-.33H3.102a2.134 2.134 0 01-1.536-.659A2.292 2.292 0 01.93 4zm0 0c0-.597.229-1.169.636-1.591.407-.422.96-.659 1.536-.659h18.46"
        stroke="#AAA"
        strokeWidth={1.6875}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}