import React from 'react';
import styled from 'styled-components';
import { SvgStroke, SvgFill} from '../../theme';

const SvgPath = styled.div`
stroke-dasharray: 1000;
stroke-dashoffset: 1000;
stroke: ${SvgStroke};
fill: ${SvgFill};
animation: dash 15s linear infinite;
@keyframes dash {
    from {
      stroke-dashoffset: 922;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`;

const NameSvg = () => (
    <div className='name-container'>
    <SvgPath>
        <svg id="Layer_1" className="path" stroke-width="2" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 719.82 90.61"><path d="M333.29,348.05V384h-5.6V300.45h15.79c20.49,0,27.33,11.42,27.33,22.29,0,14.44-11.09,25.08-28.9,25.08h-1.34L376.07,384h-7.5Zm0-42.79V343h9.63c13,0,22.17-9,22.17-20.27-.11-7.84-5.48-17.48-21.61-17.48Z" transform="translate(-327.69 -296.64)" /><path d="M419,377.28a24.59,24.59,0,0,1-18.37,8.85c-12.55,0-22.29-9.52-22.29-21.17s9.74-21.17,22.29-21.17A24.33,24.33,0,0,1,419,351.74v-9c0-15.68-7-20-15.8-20-4.36,0-7.05.33-15.34,1.79l-.78-4.59c8.06-1.57,11.08-1.91,16.12-1.91,14.68,0,21.06,8.63,21.06,22.63V384H419Zm.22-12.32c0-9-7.39-16.35-18.37-16.35-10.19,0-16.91,7.39-16.91,16.35s6.72,16.35,16.91,16.35C411.24,381.31,419.19,374,419.19,365Z" transform="translate(-327.69 -296.64)" /><path d="M483.81,382.88a42.4,42.4,0,0,1-15.45,3c-19.49,0-35.06-15.79-35.06-34s15.57-34.05,35.06-34.05a36.92,36.92,0,0,1,15.45,3.69V327h-.22a32.46,32.46,0,0,0-15.23-4.37,29.24,29.24,0,1,0,0,58.47c3.13,0,7.39-.23,15.23-3.59h.22Z" transform="translate(-327.69 -296.64)" /><path d="M500.39,384h-5.27V296.64h5.27v31.92c4-5.82,12-10.42,21.05-10.42,14.79,0,23.3,9.19,23.3,24.2V384h-5.26V343.79c0-16-9.52-20.83-19.38-20.83-8.18,0-19.71,6.27-19.71,19.71Z" transform="translate(-327.69 -296.64)" /><path d="M594.24,377.28a24.55,24.55,0,0,1-18.36,8.85c-12.55,0-22.29-9.52-22.29-21.17s9.74-21.17,22.29-21.17a24.29,24.29,0,0,1,18.36,7.95v-9c0-15.68-6.94-20-15.79-20-4.37,0-7.05.33-15.34,1.79l-.79-4.59c8.07-1.57,11.09-1.91,16.13-1.91,14.67,0,21.06,8.63,21.06,22.63V384h-5.27Zm.23-12.32c0-9-7.39-16.35-18.37-16.35-10.19,0-16.91,7.39-16.91,16.35s6.72,16.35,16.91,16.35C586.52,381.31,594.47,374,594.47,365Z" transform="translate(-327.69 -296.64)" /><path d="M643.64,387.25c-20.39,0-35.06-16.47-35.06-35.39,0-18.26,13.66-35.4,33.94-35.4,17.69,0,33.26,15.24,33.26,33.16v.56h-61.6v1.56c0,17.36,13.66,30.69,29.46,30.69,10.41,0,19.6-5,26.65-12.09l3.36,4C667.6,381.42,656.63,387.25,643.64,387.25Zm-28.9-41.78h55.1c-2.12-13.33-14.22-24.19-27.32-24.19C629,321.28,617.43,331.58,614.74,345.47Z" transform="translate(-327.69 -296.64)" /><path d="M690,384h-5.26V296.64H690Z" transform="translate(-327.69 -296.64)" /><path d="M784.75,308.74a38.55,38.55,0,0,0-20.27-5.94c-21.84,0-40,18.7-40,39.2,0,20.94,18.14,39.65,40,39.65a39.57,39.57,0,0,0,20.27-5.94v6.05a45.94,45.94,0,0,1-20.27,4.93c-25.31,0-45.69-19.94-45.69-44.58s20.38-44.35,45.69-44.35a46.17,46.17,0,0,1,20.27,4.93Z" transform="translate(-327.69 -296.64)" /><path d="M861.81,351.86c0,18.59-14.78,35.39-35.06,35.39s-35-16.8-35-35.39,14.78-35.4,35-35.4S861.81,333.26,861.81,351.86Zm-64.51,0c0,16,12.32,30.57,29.45,30.57s29.46-14.56,29.46-30.57-12.32-30.58-29.46-30.58S797.3,335.84,797.3,351.86Z" transform="translate(-327.69 -296.64)" /><path d="M932.26,370c-6,10.08-16.8,17.25-29.12,17.25-20,0-34.84-16.8-34.84-35.39s14.79-35.4,34.84-35.4c12.43,0,23.18,7.06,29.12,17.36V296.64h5.26V384h-5.26Zm-29.12-48.72c-16.92,0-29.24,14.56-29.24,30.58s12.32,30.57,29.24,30.57,29.23-14.56,29.23-30.57S920.05,321.28,903.14,321.28Z" transform="translate(-327.69 -296.64)" /><path d="M981.65,387.25c-20.39,0-35.06-16.47-35.06-35.39,0-18.26,13.67-35.4,33.94-35.4,17.69,0,33.26,15.24,33.26,33.16v.56h-61.6v1.56c0,17.36,13.67,30.69,29.46,30.69,10.41,0,19.6-5,26.65-12.09l3.36,4C1005.62,381.42,994.64,387.25,981.65,387.25Zm-28.9-41.78h55.11c-2.13-13.33-14.23-24.19-27.33-24.19C967,321.28,955.44,331.58,952.75,345.47Z" transform="translate(-327.69 -296.64)" /><path d="M1027.68,384h-5.26V319.71h5.26v12.21c2.91-5,9.18-12.21,17.7-12.21h2.12v5.94a4.94,4.94,0,0,0-1.79-.34c-11.09,0-18,12.88-18,21.73Z" transform="translate(-327.69 -296.64)" /></svg>
   </SvgPath>
    </div>
);

export default NameSvg;