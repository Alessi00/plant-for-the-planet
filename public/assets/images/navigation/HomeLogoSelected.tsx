import React from 'react';

function HomeLogoSelected(prop: { color: string }) {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 712 712"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M349.795 361.954L344.691 357.793L343.566 356.877C339.713 353.849 336.026 350.617 332.52 347.192C304.015 318.654 288.003 279.968 288.003 239.632C288.003 199.296 304.015 160.61 332.52 132.072L339.456 125.136C306.611 101.212 267.621 87.1539 227.066 84.6131C186.51 82.0723 146.071 91.1538 110.496 110.792C74.9216 130.429 45.6871 159.808 26.225 195.48C6.76287 231.151 -2.11916 271.634 0.621566 312.177C3.36229 352.719 17.612 391.639 41.698 424.366C65.7839 457.093 98.7064 482.271 136.601 496.942C174.495 511.613 215.788 515.169 255.633 507.193C295.477 499.217 332.22 480.04 361.547 451.913C351.792 422.982 347.799 392.42 349.795 361.954ZM284.57 392.159L274.834 401.869C272.315 404.441 270.511 407.626 269.599 411.108C268.29 415.977 267.244 420.897 265.49 425.635L250.44 465.89C238.404 468.532 226.12 469.884 213.797 469.92V446.364C215.237 435.502 207.201 415.139 194.298 402.235C191.739 399.674 189.71 396.634 188.327 393.288C186.944 389.942 186.233 386.357 186.236 382.736V355.254C186.24 350.335 184.927 345.505 182.432 341.266C179.937 337.026 176.352 333.533 172.05 331.148C159.67 324.317 142.082 314.737 130.016 308.665C120.109 303.671 110.918 297.368 102.69 289.925L102.01 289.323C96.2449 283.897 91.0366 277.908 86.4627 271.446C78.3751 259.59 65.2098 240.038 56.6772 227.422C74.3705 188.103 106.106 156.807 145.667 139.662L166.371 150.132C168.471 151.186 170.807 151.685 173.156 151.582C175.504 151.478 177.787 150.774 179.786 149.539C181.786 148.303 183.435 146.575 184.578 144.521C185.721 142.467 186.319 140.155 186.315 137.804V127.936C193.246 126.824 200.239 126.133 207.254 125.869L231.621 150.236C232.904 151.515 233.922 153.035 234.616 154.708C235.311 156.381 235.668 158.175 235.668 159.986C235.668 161.797 235.311 163.591 234.616 165.264C233.922 166.937 232.904 168.457 231.621 169.736L218.692 182.665C218.052 183.305 217.545 184.064 217.199 184.899C216.853 185.734 216.675 186.629 216.675 187.534C216.675 188.438 216.853 189.333 217.199 190.168C217.545 191.004 218.052 191.763 218.692 192.402L222.722 196.433C223.362 197.072 223.869 197.831 224.215 198.666C224.561 199.501 224.739 200.397 224.739 201.301C224.739 202.205 224.561 203.1 224.215 203.936C223.869 204.771 223.362 205.53 222.722 206.169L215.839 213.079C214.489 214.279 212.774 214.989 210.97 215.094H203.118C201.322 215.09 199.595 215.784 198.302 217.031L189.77 225.354C188.512 226.706 187.771 228.457 187.676 230.301C187.723 231.359 187.972 232.399 188.409 233.364L201.836 260.244C202.363 261.293 202.612 262.46 202.561 263.633C202.51 264.806 202.159 265.947 201.543 266.946C200.926 267.945 200.064 268.771 199.039 269.343C198.014 269.915 196.859 270.216 195.685 270.216H190.817C189.158 270.223 187.554 269.618 186.315 268.515L178.306 261.579C175.714 259.553 172.561 258.374 169.276 258.202C167.794 258.241 166.324 258.479 164.905 258.909L138.077 267.86C136.052 268.568 134.309 269.908 133.104 271.682C132.193 272.865 131.558 274.237 131.246 275.696C130.933 277.156 130.95 278.668 131.297 280.12C131.643 281.573 132.309 282.929 133.247 284.091C134.184 285.253 135.369 286.191 136.716 286.836L146.243 291.6C154.368 295.669 163.33 297.784 172.417 297.777C181.499 297.777 191.89 321.333 199.977 325.311H257.559C261.178 325.311 264.761 326.025 268.102 327.413C271.444 328.801 274.479 330.835 277.032 333.399L288.837 345.177C293.405 350.345 296.066 356.922 296.375 363.813C295.798 374.333 291.631 384.338 284.57 392.159Z"
        fill={prop.color}
      />
      <path
        d="M534.083 315.391C520.782 331.739 503.451 344.34 483.799 351.954C464.147 359.568 442.851 361.932 422.008 358.813C418.317 400.482 429.389 428.775 430.305 431.053C432.232 435.955 432.163 441.417 430.113 446.269C428.063 451.121 424.195 454.978 419.337 457.013C414.479 459.049 409.017 459.102 404.12 457.16C399.223 455.219 395.282 451.437 393.138 446.626C377.905 410.375 356.783 294.479 468.544 182.718C469.946 181.311 470.899 179.52 471.284 177.571C471.669 175.623 471.468 173.604 470.706 171.77C469.944 169.936 468.656 168.369 467.004 167.266C465.353 166.163 463.411 165.574 461.425 165.574C460.108 165.568 458.802 165.825 457.585 166.328C456.367 166.831 455.261 167.571 454.332 168.505C396.253 226.558 372.566 284.742 364.531 333.399C361.123 330.763 357.855 327.949 354.742 324.971C332.118 302.322 319.41 271.619 319.41 239.606C319.41 207.593 332.118 176.89 354.742 154.241L390.312 118.697C403.917 105.156 413.662 88.2289 418.539 69.6632C423.416 51.0975 423.25 31.5664 418.056 13.0868C417.592 11.6344 417.477 10.0935 417.718 8.58823C417.959 7.08296 418.551 5.65536 419.444 4.42038C420.338 3.1854 421.509 2.17754 422.864 1.47796C424.218 0.778372 425.718 0.406612 427.243 0.392609C428.584 0.401445 429.914 0.649622 431.169 1.12547C460.232 12.6518 486.619 30.0234 508.695 52.1639C585.331 128.8 598.81 240.509 534.083 315.391Z"
        fill={prop.color}
      />
    </svg>
  );
}

export default HomeLogoSelected;
