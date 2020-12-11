import * as React from "react";

function Corner3({ color = "grey" }) {
  return (
    <svg viewBox="0 0 464 449">
      <g fill={color} fillRule="evenodd">
        <path d="M51.262 45.923c0 5.292-.646 4.726 2.486 2.168l-2.486-2.168zM426.644 397.56c-.774 19.06-5.856 8.96 1.22 19.79 4.55-1.95 8.183-4.64 11.722-7.76-2.294-6.14-7.06-9.24-12.942-12.03zM31.125 304.78c-4.794-3.58-8.837-2.26-13.293-.22-.839 1.67-1.769 3.53-2.605 5.2 6.335 7.46 8.681 9.3 15.547 11.89 1.098-5.63.835-11.04.351-16.87zM25.187 33.087c4.607 9.962 3.546 9.354 16.25 7.785 1.432-.177 3.063-.537 3.399-3.071-4.335-4.058-5.473-11.33-12.431-14.036-2.766 2.418-5.925 4.439-7.218 9.322zM94.209 416.07c-1.04-.1-2.158.55-3.308.88.439 6.09 4.107 9.85 7.113 13.72 6.988.19 9.014-.66 16.069-6.6 1.418-6.24 4.945-5.47-19.874-8zm-64.887-82.42c-13.641 3.58-13.304 2.16-15.738 4.53-.345 7.81-1.743 4.14 6.963 16.36 12.213 4.14 9.678-.56 8.775-20.89zm-8.682 44.39c0 17.2-1.081 12.16 4.211 20.21 2.333 3.55 9.343 8.34 11.359 5.65-.763-9.81-1.893-19.55-5.198-29.08-3.747-.86-6.744.29-10.372 3.22zm53.424 38.54c-5.79-.5-2.865-.82-25.209-.32-.501.01-.988.67-1.607 1.12-.371 2.87-1.533.32 7.867 15.2h9.51c11.908-6.91 10.34-5.88 9.439-16zm-66.343-20c-1.706-10.18-.254-20.13 5.338-29.25C-.523 348.47-.323 351.56 1.682 336.15c1.132-8.72 7.593-8.9 7.803-12.75-4.504-4.58-10.058-9.51-5.967-19.13 6.689-15.72 21.711-11.59 29.022-10.71 2.7-11.87 1.446-123.77.756-220.5-4.184-12.631-10.992-12.52-15-19.669C7.807 34.68 6.758 30.749 18.145 19.563 27.823 10.054 28.889 3.993 32.504.662l4.292.268c6.808 4.808-.349 10.097 4.918 14.745 7.303 6.446 12.408 14.752 18.733 22.021 11.036 12.682 1.758 17.393-15.228 40.624 0 85.25 1.816 84.14 1.661 209.75-.008 6.89-1.583 18.46-1.571 19.54.172 15.61-.536 86.35 7.856 94.61.1.01 97.449 2.58 197.898-.51 96.607-2.97 71.381-5.04 109.282-4.2 13.051.29 25.288-3.41 37.371-7.59 3.724-1.29 6.935-4.06 10.588-6.28 1.175-2.74 2.215-5.68 3.659-8.41 3.743-7.07 11.331-8.22 17.156-2.7.744.71 7.241 8.85 14.398 13.26 6.179 3.81 6.526 7.27 13.541 11.32 3.372 1.94 5.699 4.81 6.528 9.49-.461 1.42-1.12 3.45-1.768 5.44-30.993 23.31-32.046 26.05-39.213 24.07-5.09-2.45-7.873-7.25-9.65-11.75-17.773-15.09-12.114-11.89-25.164-15.18-33.127 6.52-28.978-1.26-76.61 5.42-29.431 4.12-173.252 2.82-179.923 4.1.076 1.2-.262 2.6.286 3.37 3.11 4.35 7.138 7.6 12.617 9.7 5.202-3.96 10.353-7.88 16.008-12.19.901 2.03 2.191 3.62 2.222 5.23.225 12.02-15.309 29.41-30.675 19.53-9.356-6.02-4.192-6.99-14.147-1.44-23.611 13.17-31.763.41-36.815-6.01-5.905 1.55-4.19 11.48-25.883 8.95-9.791-1.13-11.031-6.67-19.072-21.31l-1.185-5.79c-16.522-6.46-15.029-4.22-26.893-22.16z" />
        <path d="M99.156 334.63c7.906 3.69 11.082 10.92 15.91 15.97 130.688 0 51.681-7.05 193.543-5.3 10.241.12 14.854 9.39-1.734 9.41-132.421.17-5.771.67-179.207 7.3-11.024.42-10.952-.09-13.581 3.88-11.982 18.06-58.982-3.94-23.293-31.9 2.305-27.16-5.47-90.94-4.922-111.58 1.257-47.4-4.721-49.23-.61-64.61 2.108 1.69 2.843.58 2.938 7.51.121 9.04 1.73 10.26 2.934 40.05.41 10.16-.717 38.9 6.285 87.55 2.076 14.41 1.737 27.25 1.737 41.72" />
      </g>
    </svg>
  );
}

const MemoCorner3 = React.memo(Corner3);
export default MemoCorner3;
