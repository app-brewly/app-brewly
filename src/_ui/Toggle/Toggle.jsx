import styles from "./Toggle.module.css";

const Toggle = ({ type }) => {
    return (
        <div>
            {type === "off" && (
                <div>
                    <svg
                        width='38'
                        height='27'
                        viewBox='0 0 38 27'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <rect
                            x='2.1958'
                            y='1'
                            width='35'
                            height='22'
                            rx='11'
                            fill='white'
                        />
                        <rect
                            x='2.1958'
                            y='1'
                            width='35'
                            height='22'
                            rx='11'
                            stroke='#AADC66'
                        />
                        <g filter='url(#filter0_d_197_1342)'>
                            <rect
                                x='4'
                                y='3.37109'
                                width='17'
                                height='17'
                                rx='8.5'
                                fill='#AADC66'
                            />
                        </g>
                        <defs>
                            <filter
                                id='filter0_d_197_1342'
                                x='0'
                                y='1.37109'
                                width='25'
                                height='25'
                                filterUnits='userSpaceOnUse'
                                color-interpolation-filters='sRGB'>
                                <feFlood
                                    flood-opacity='0'
                                    result='BackgroundImageFix'
                                />
                                <feColorMatrix
                                    in='SourceAlpha'
                                    type='matrix'
                                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                    result='hardAlpha'
                                />
                                <feOffset dy='2' />
                                <feGaussianBlur stdDeviation='2' />
                                <feComposite
                                    in2='hardAlpha'
                                    operator='out'
                                />
                                <feColorMatrix
                                    type='matrix'
                                    values='0 0 0 0 0.152941 0 0 0 0 0.152941 0 0 0 0 0.152941 0 0 0 0.1 0'
                                />
                                <feBlend
                                    mode='normal'
                                    in2='BackgroundImageFix'
                                    result='effect1_dropShadow_197_1342'
                                />
                                <feBlend
                                    mode='normal'
                                    in='SourceGraphic'
                                    in2='effect1_dropShadow_197_1342'
                                    result='shape'
                                />
                            </filter>
                        </defs>
                    </svg>
                </div>
            )}
            {type === "on" && (
                <div>
                    <svg
                        width='38'
                        height='27'
                        viewBox='0 0 38 27'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <rect
                            x='0.695801'
                            y='0.944336'
                            width='36'
                            height='23'
                            rx='11.5'
                            fill='#125B48'
                        />
                        <g filter='url(#filter0_d_197_1351)'>
                            <rect
                                x='17'
                                y='4'
                                width='17'
                                height='17'
                                rx='8.5'
                                fill='white'
                            />
                        </g>
                        <defs>
                            <filter
                                id='filter0_d_197_1351'
                                x='13'
                                y='2'
                                width='25'
                                height='25'
                                filterUnits='userSpaceOnUse'
                                color-interpolation-filters='sRGB'>
                                <feFlood
                                    flood-opacity='0'
                                    result='BackgroundImageFix'
                                />
                                <feColorMatrix
                                    in='SourceAlpha'
                                    type='matrix'
                                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                    result='hardAlpha'
                                />
                                <feOffset dy='2' />
                                <feGaussianBlur stdDeviation='2' />
                                <feComposite
                                    in2='hardAlpha'
                                    operator='out'
                                />
                                <feColorMatrix
                                    type='matrix'
                                    values='0 0 0 0 0.152941 0 0 0 0 0.152941 0 0 0 0 0.152941 0 0 0 0.1 0'
                                />
                                <feBlend
                                    mode='normal'
                                    in2='BackgroundImageFix'
                                    result='effect1_dropShadow_197_1351'
                                />
                                <feBlend
                                    mode='normal'
                                    in='SourceGraphic'
                                    in2='effect1_dropShadow_197_1351'
                                    result='shape'
                                />
                            </filter>
                        </defs>
                    </svg>
                </div>
            )}
        </div>
    );
};

export default Toggle;
