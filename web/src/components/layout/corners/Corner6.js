import * as React from "react";

function Corner6({ color = "grey" }) {
  return (
    <svg viewBox="0 0 462 418">
      <path
        d="M104.942 365.64c-13.09 2.33-16.094 2.12-15.172 4.91 9.085 1.12 9.085 1.12 15.76-2.73l-.588-2.18zm322.088-10.49c7.36 3.94 14.08 4.12 21.06-.47.89-5.31 3.4-5.63-21.06.47zM56.438 282.6c.91-20.83.598-40.26-.316-59.69-1.679 11.52-1.449 48.92.316 59.69zm27.648 98.98c1.138 7.61 12.762 10.8 19.273 9.21.857-1.92 1.683-3.79 2.643-5.94-6.973-4.79-14.252-3.34-21.916-3.27zM59.223 17.27c0 26.88-.265 21.12.96 25.96 5.393-9.32 6.762-17.79 6.994-29.46.011-.57-1.137-1.17-2.023-2.02-1.948 1.81-3.725 3.47-5.931 5.52zM437.79 374.23c-19.93 1.34-20.19-4.04-32.25-2.17.85 1.54 1.43 2.57 1.87 3.37 9.6 3.88 19.3 3.2 28.92 2.97 3.8-.09 7.28-1.51 10.2-4.81-.64-4.56 1.14-4.47-8.74.64zm-40.95 11.37c-18.04-19.6-1-12.67-20.37-12.94-1.21-.02-2.41-1.74-3.86.01 3.55 2.77 7.26 5.16 10.33 8.19 5.41 5.33 10.13 14.5 15.2 11.9.68-2.49-.58-4.7-1.3-7.16zm-336.883-4.3c-1.899.74-2.553 2.2-2.53 3.77.084 5.76-1.559 11.74 1.891 17.44 3.225.8 6.332 2.14 10.195 1.43 2.105-5.85-2.143-10.89-1.261-16.29-2.998-2.29-5.692-4.36-8.295-6.35zm.984-321.63c-3.774 7.88.107 17.24-.497 26.76-.089 1.42.391 2.88.733 5.14 6.49-7.91 11.573-22.97 8.441-35.96-3.224 1.51-5.993 2.81-8.677 4.06zM375.61 354.79c3.18.45 6.16.54 9.33-.53 5.45-6.01 19-28.1 4.14-26.3-5.77 1.72-7.26 6.75-13.3 23.65-.28.8-.11 1.76-.17 3.18zM47.675 74.83c-8.125-3.55-4.848-1.38-13.508-8.07-1.518 2.04-1.209-.87-1.209 12.99 2.503 5.29 12.805 22.75 14.495 24.63 3.715 4.12.209-23.59.222-29.55zm.186 284.32c3.268-4.33-2.03-7.93-5.466-16.23-3.276-7.91-11.277-12.43-21.127-9.75-1.678 13.56 15.458 24.83 26.593 25.98zm-.087-337.67c-1.937-2.56-2.591-6.04-5.393-8.57-2.631 1.26-5.086 2.43-7.54 3.6-.121 1.56-.526 2.85-.258 3.98 1.584 6.68 1.606 13.49 2.194 20.27 1.011 11.64 7.64 21.32 10.518 19.82.637-3.46.479 3.69.479-39.1zm-24.04 350.84c-7.192 2.04-11.352 6.01-13.528 11.89-4.146 11.2 17.016 9.69 32.909-.73 3.411-10.55 2.84-7.84 2.294-10.72-7.447-1.86-15.123.13-21.675-.44zm48.912-40.79c-5.384 7.06-4.09 14.33-5.47 20.97-.807 3.88-.87 7.84-.002 12.5 23.565-17.39 21.179-16.96 23.567-20.13 1.28-15.4 1.713-12.69-1.166-15.62-11.88-1.17-8.224-1.75-16.929 2.28zM354.6 358.84c6.24-4.69 6.16-16.9 26.96-30.34 21.18-13.69 30.55-9.31 22.88 17.18 1.45 1.87 3.08 1.37 4.43.76 4.63-2.08 5.96-2.42 32.59-8.13 18.28-3.93 19.48 1.42 19.8 11.42.14 4.53-1.36 8.56-3.24 12.1 1.05 7.67 1.48 3.16-.45 16.64-12.63 18.62-38.39 8.58-49.32 12.04-3.17 7.69-4.7 14.45-13.37 13.95-17.76-1.03-13.28-10.18-24.02-17.01-15.95-10.17-7.21-13.05-19.24-12.95-74.922.63-70.685.52-81.344 1.97-67.238 9.16-67.984 5.31-152.434 5.31-1.821 9.66 2.361 11.09-13.326 22.32-7.953 1.47-15.318 1.79-22.098-1.53-4.695 1.54-.471 7.69-7.977 12.77-11.532 4.6-29.736 4.71-31.267-14.79-.262-3.34-.032-6.82-1.378-9.99-3.241-.06-4.406 2.51-6.232 4-12.722 10.36-30.119 5.18-34.099-1.72-3.076-11.45 5.437-22.04 12.184-25.55 12.675-6.58 12.943-1.95 3.584-12.18-9.582-10.47-10.788-30.01 3.146-32.17 12.374-1.92 24.872 7.76 28.715 15.54.243.5.893.79 1.844 1.59 1.311-11.99 1.287-188.32-1.047-208.03-25.146-31.33-39.625-47.35-28.299-83.77 2.778-1.36 5.512-2.69 8.511-4.15.513-22.09-6.057-23.46 5.018-38.3 7.188-9.63 14.469-4.23 18.421-1.81 8.166 0 23.531-16.56 22.699 20.69-.142 6.34-2.162 12.2-5.824 17.83 2.197 1.57 4.175 2.98 6.157 4.4 3.941 4.9 1.089 9.09 1.622 15.35 1.222 14.37-5.384 24.7-16.94 48.62 0 85.67 3.844 76.03 4.744 104.74 2.354 75.05-.895 93.76 1.171 111.72 5.191 2.2 11.043-7.68 23.433-4.13 7.187 7.87 7.388 8.39 9.547 24.55 2.934 3.12 11.234-3.01 18.524 8.01 14.986 22.67-22.457 13.66 80.104 11.96 16.794-.28 84.131-7.58 89.46-7.11 4.681.42 53.621-.49 66.361-1.8z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
}

const MemoCorner6 = React.memo(Corner6);
export default MemoCorner6;
