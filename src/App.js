import "./css/app.css";
import ceo from "./img/a.png";

function App() {
  var pointerX = -1;
  var pointerY = -1;
  document.onmousemove = function (event) {
    pointerX = event.pageX;
    pointerY = event.pageY;
    pointerCheck();
  };
  function pointerCheck() {
    let change = document.getElementById("change");
    change.style.left = 355 + 0.015 * pointerX;
    change.style.top = -25 + 0.02 * pointerY;
  }
  return (
    <div className="app">
      <header className="app__header">
        <svg
          className="app__header__logo"
          width="127"
          height="46"
          viewBox="0 0 127 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.2687 11.006C16.958 10.5929 17.8104 10.5929 18.4997 11.006L24.115 14.3708C25.189 15.0143 25.189 16.6083 24.115 17.2518L18.4997 20.6166C17.8104 21.0297 16.958 21.0297 16.2687 20.6166L14.0709 19.2997C13.578 19.0043 13.4115 18.3545 13.699 17.8482C13.9865 17.3419 14.6192 17.1709 15.112 17.4662L17.3098 18.7832C17.3558 18.8107 17.4126 18.8107 17.4586 18.7832L22.4182 15.8113L17.4586 12.8394C17.4126 12.8119 17.3558 12.8119 17.3098 12.8394L11.4061 16.377C11.3608 16.4042 11.3329 16.454 11.3329 16.508V23.6049C11.3329 23.6588 11.3608 23.7087 11.4061 23.7358L17.3098 27.2734C17.3558 27.301 17.4126 27.301 17.4586 27.2734L23.9481 23.3848C24.441 23.0895 25.0736 23.2605 25.3611 23.7668C25.6486 24.2731 25.4821 24.9229 24.9892 25.2182L18.4997 29.1068C17.8104 29.5199 16.958 29.5199 16.2687 29.1068L10.365 25.5692C9.68483 25.1617 9.2666 24.4137 9.2666 23.6049V16.508C9.2666 15.6991 9.68483 14.9511 10.365 14.5436L16.2687 11.006Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M58.5073 21.0698C58.5048 21.072 58.5023 21.0742 58.4996 21.0762C58.2642 21.2617 58.0163 21.3638 57.7585 21.3638H46.3901V24.3757C46.3901 25.1132 46.9932 25.8986 48.2837 26.7216C49.5668 27.5155 50.6797 27.9011 51.6275 27.9011C52.9384 27.9011 54.3186 27.5139 56.4659 26.3529C56.7381 26.2025 56.9414 26.0913 57.206 26.0147C57.3052 25.986 57.408 25.9697 57.5105 25.9806C57.6986 26.0007 58.0156 26.0853 58.213 26.4134C58.5079 26.9036 58.3175 27.3264 58.3087 27.3431C58.0377 27.8583 57.0302 28.3447 56.9291 28.3925C54.5803 29.6441 53.1724 29.9938 51.6048 29.9938C50.24 29.9938 48.7008 29.457 46.9914 28.4044L46.9904 28.4037C45.3147 27.3528 44.4193 26.2312 44.4193 25.0281V15.8811C44.4193 14.7476 45.3353 13.6504 47.0364 12.5786C48.7457 11.5015 50.2854 10.9519 51.651 10.9519C53.0157 10.9519 54.555 11.4887 56.2643 12.5413C57.9672 13.5899 58.8827 14.6869 58.8827 15.8447V20.4432C58.8827 20.6618 58.7268 20.8722 58.5073 21.0698ZM48.3592 14.1538C47.7136 14.5533 47.2166 14.91 46.8819 15.2574C46.5483 15.6035 46.3901 15.9254 46.3901 16.258V19.4065H56.9119V16.2216C56.9119 15.5352 56.4343 14.9177 55.141 14.1173C53.8585 13.3236 52.7296 12.9373 51.7501 12.9373C50.7718 12.9373 49.6435 13.3349 48.3609 14.1527L48.3592 14.1538ZM73.8213 13.791L73.8199 13.7902C72.5365 12.996 71.4232 12.6102 70.4753 12.6102C69.4958 12.6102 68.3669 12.9965 67.0844 13.7902C66.4346 14.1923 65.9638 14.5064 65.6543 14.8147C65.3513 15.1165 65.2144 15.4014 65.2144 15.7498V24.1566C65.2144 24.8766 65.805 25.796 67.0828 26.5872C68.4051 27.362 69.632 27.8604 70.5759 27.8604C71.484 27.8604 72.4897 27.3557 73.8213 26.5508C75.1336 25.7576 75.7361 24.8496 75.7361 24.1566V15.7498C75.7361 15.4028 75.5966 15.1182 75.2859 14.8159C74.9688 14.5074 74.4865 14.1932 73.8213 13.791ZM75.0899 28.1478L75.0886 28.1486C73.3815 29.1998 71.9424 29.738 70.5759 29.738C68.9078 29.738 67.0611 28.9846 65.2144 27.5022V34.626C65.215 34.6405 65.2153 34.655 65.2153 34.6696V35.6486C65.2153 35.9712 65.0628 36.2741 64.8055 36.4625C64.462 36.7141 63.9989 36.7141 63.6554 36.4625C63.3981 36.2741 63.2456 35.9712 63.2456 35.6486V34.8668C63.2442 34.8493 63.2435 34.8316 63.2435 34.8137V15.5889C63.2435 14.4547 64.1603 13.3699 65.8613 12.3224C67.5703 11.2456 69.1098 10.6961 70.4753 10.6961C71.8704 10.6961 73.4096 11.2326 75.0891 12.2858C76.7916 13.3343 77.707 14.4313 77.707 15.5889V24.8817C77.707 25.4384 77.4751 25.9885 77.0358 26.5294C76.5972 27.0696 75.946 27.6084 75.0899 28.1478ZM84.4691 12.2862L84.4702 12.2855C86.1802 11.2325 87.7347 10.6961 89.1298 10.6961C90.5248 10.6961 92.0637 11.2325 93.743 12.2855C95.4469 13.3105 96.3615 14.4073 96.3615 15.5889V24.8452C96.3615 25.9788 95.4455 27.0759 93.7444 28.1478L93.7431 28.1486C92.0337 29.2012 90.4945 29.738 89.1298 29.738C87.7651 29.738 86.2258 29.2012 84.5165 28.1486L84.5151 28.1478C82.814 27.0759 81.8981 25.9788 81.8981 24.8452V15.5889C81.8981 14.4325 82.7962 13.3354 84.4691 12.2862ZM92.4758 13.7546L92.4744 13.7538C91.191 12.9595 90.0777 12.5738 89.1298 12.5738C88.1503 12.5738 87.0214 12.9601 85.7389 13.7538C84.4485 14.5523 83.8689 15.3138 83.8689 16.0262V24.3057C83.8689 25.0181 84.4485 25.7796 85.7389 26.5781C87.0214 27.3718 88.1503 27.7581 89.1298 27.7581C90.0777 27.7581 91.191 27.3724 92.4744 26.5781L92.4758 26.5773C93.7982 25.778 94.3907 25.0163 94.3907 24.3057V16.0262C94.3907 15.3156 93.7982 14.554 92.4758 13.7546ZM110.578 13.8624L110.576 13.8613C109.351 13.0649 108.348 12.6831 107.558 12.6831C106.768 12.6831 105.764 13.0539 104.539 13.826C103.311 14.5997 102.76 15.3368 102.76 16.0262V27.683C102.76 27.6927 102.761 27.7024 102.761 27.7122V28.6912C102.761 29.0138 102.608 29.3167 102.351 29.5051C102.007 29.7567 101.544 29.7567 101.201 29.5051C100.943 29.3167 100.791 29.0138 100.791 28.6912V27.7668C100.79 27.7516 100.789 27.7362 100.789 27.7206V15.4796C100.789 14.3948 101.675 13.3339 103.313 12.2869C104.957 11.2362 106.375 10.6961 107.558 10.6961C108.515 10.6961 109.543 10.9975 110.637 11.5888C111.679 12.1514 112.581 12.8157 113.342 13.5826C114.076 12.8384 114.978 12.1863 116.047 11.625C117.17 11.0111 118.182 10.6961 119.079 10.6961C120.354 10.6961 121.802 11.2349 123.418 12.2874C125.028 13.3117 125.895 14.3722 125.895 15.4796V27.7107C125.895 27.7156 125.895 27.7206 125.895 27.7256V28.7045C125.895 29.0271 125.742 29.33 125.485 29.5184C125.141 29.77 124.678 29.77 124.335 29.5184C124.078 29.33 123.925 29.0271 123.925 28.7045V27.7621C123.924 27.7484 123.924 27.7346 123.924 27.7206V16.0262C123.924 15.3368 123.373 14.5997 122.145 13.826C120.921 13.0546 119.901 12.6831 119.079 12.6831C118.258 12.6831 117.254 13.0542 116.061 13.8251C114.865 14.5979 114.327 15.3349 114.327 16.0262V27.7023C114.328 27.71 114.328 27.7178 114.328 27.7256V28.7045C114.328 29.0271 114.175 29.33 113.918 29.5184C113.574 29.77 113.111 29.77 112.768 29.5184C112.51 29.33 112.358 29.0271 112.358 28.7045V27.7645C112.357 27.75 112.357 27.7354 112.357 27.7206V16.0262C112.357 15.3623 111.808 14.6373 110.578 13.8624Z"
            fill="white"
          />
          <path
            d="M111.664 38.2769C111.171 37.5106 110.448 37.1275 109.495 37.1275C108.692 37.1275 108.003 37.4293 107.441 38.0215C106.878 38.6136 106.591 39.3335 106.591 40.181C106.591 41.0286 106.878 41.76 107.441 42.3522C108.003 42.9443 108.692 43.2346 109.495 43.2346C110.448 43.2346 111.171 42.8514 111.664 42.0851V43.0836H112.663V34.9563H111.664V38.2769ZM109.621 42.2593C109.047 42.2593 108.565 42.0619 108.175 41.6672C107.785 41.2608 107.59 40.7732 107.59 40.181C107.59 39.5889 107.785 39.1012 108.175 38.7065C108.565 38.3001 109.047 38.1027 109.621 38.1027C110.207 38.1027 110.689 38.3001 111.079 38.7065C111.469 39.1012 111.664 39.5889 111.664 40.181C111.664 40.7732 111.469 41.2608 111.079 41.6672C110.689 42.0619 110.207 42.2593 109.621 42.2593Z"
            fill="white"
          />
          <path
            d="M115.255 38.8458C115.255 38.3466 115.714 38.0679 116.277 38.0679C116.885 38.0679 117.298 38.3117 117.505 38.811L118.343 38.3349C117.976 37.5803 117.207 37.1275 116.277 37.1275C115.691 37.1275 115.209 37.29 114.819 37.6151C114.44 37.9402 114.245 38.3582 114.245 38.8574C114.245 40.0881 115.416 40.39 116.323 40.6338C116.954 40.7848 117.459 41.0402 117.459 41.493C117.459 42.0387 116.977 42.2825 116.323 42.2825C115.623 42.2825 115.083 41.9342 114.899 41.3769L114.039 41.8761C114.371 42.7005 115.209 43.2346 116.323 43.2346C116.954 43.2346 117.459 43.072 117.861 42.7585C118.263 42.4451 118.469 42.0155 118.469 41.493C118.481 40.2507 117.287 39.914 116.392 39.7166C115.76 39.5424 115.255 39.2986 115.255 38.8458Z"
            fill="white"
          />
          <path
            d="M123.049 37.1275C122.096 37.1275 121.373 37.5106 120.88 38.2769V37.2784H119.881V45.4057H120.88V42.0851C121.373 42.8514 122.096 43.2346 123.049 43.2346C123.853 43.2346 124.541 42.9443 125.104 42.3522C125.666 41.76 125.953 41.0286 125.953 40.181C125.953 39.3335 125.666 38.6136 125.104 38.0215C124.541 37.4293 123.853 37.1275 123.049 37.1275ZM122.923 42.2593C122.337 42.2593 121.855 42.0619 121.465 41.6672C121.075 41.2608 120.88 40.7732 120.88 40.181C120.88 39.5889 121.075 39.1012 121.465 38.7065C121.855 38.3001 122.337 38.1027 122.923 38.1027C123.497 38.1027 123.979 38.3001 124.369 38.7065C124.759 39.1012 124.954 39.5889 124.954 40.181C124.954 40.7732 124.759 41.2608 124.369 41.6672C123.979 42.0619 123.497 42.2593 122.923 42.2593Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.9626 10.5344L18.1214 2.32567C17.6647 2.05485 17.1021 2.05485 16.6454 2.32567L2.80426 10.5344C2.34761 10.8053 2.0663 11.3058 2.0663 11.8474V28.2649C2.0663 28.8066 2.34761 29.3071 2.80426 29.5779L16.6454 37.7867C17.1021 38.0575 17.6647 38.0575 18.1214 37.7867L31.9626 29.5779C32.4192 29.3071 32.7005 28.8066 32.7005 28.2649V11.8474C32.7005 11.3058 32.4192 10.8053 31.9626 10.5344ZM19.1545 0.487488C18.0586 -0.162496 16.7083 -0.162496 15.6123 0.487488L1.77111 8.69625C0.675145 9.34623 0 10.5475 0 11.8474V28.2649C0 29.5649 0.675145 30.7661 1.77111 31.4161L15.6123 39.6249C16.7083 40.2749 18.0586 40.2749 19.1545 39.6249L32.9957 31.4161C34.0917 30.7661 34.7668 29.5649 34.7668 28.2649V11.8474C34.7668 10.5475 34.0917 9.34623 32.9957 8.69625L19.1545 0.487488Z"
            fill="white"
          />
        </svg>
      </header>
      <div className="app__block">
        <div className="text">
          <div className="text__title">
            Epom –{" "}
            <div className="text__title__change">
              {" "}
              Customizable <div className="rect"></div>
            </div>{" "}
            Google Ad Manager Alternative
          </div>
          <div className="text__subtitle">
            Stay cool this summer with Epom: get a 75% discount on our white-
            label technology and build your own DSP right away.
          </div>
          <div className="text__comment">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              width="695px"
              height="172px"
            >
              <image
                x="0px"
                y="0px"
                width="695px"
                height="172px"
                href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAArcAAACsCAMAAABWzXQ0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAb1BMVEUAAAD///9wcO94eO94evJ5efF3efF4eO93efN5efN4efB2ee96eu94eO94efF4ePF4eO91de9wgO95efJ5efB4efF3eO95efF4efJ5ee93efF1eu94eO93efJ3efB4evF4evN4eO93evR4efH////74g/8AAAAI3RSTlMAABBgn8/vII+Pv3AwQN+foDAQr6+gkO+/cM8wkK/Pn3+Ab6s3cQMAAAABYktHRAH/Ai3eAAAAB3RJTUUH5gQcABYKH8tAEQAAA7FJREFUeNrt29tS2wYUhlFXPqhgWxiTckhpmna//ztWQMIpBqNeIP0za11ZvmD2MN9otmRpNnvUzBfLVcEUrZaLeTP7Vfu7Zpm4Rfuq2uak//Z0vTlUNIyv2a5P+0ZPXnzZdlVn7f/8i/A52l1V9yzTTVfdZuyh4Kj+BNudPzvYWRBIsL94OuN29WXsceCD/qju4SR78vMDTN++e7g4a6tckZFj8xDsos7GngQG2NVlf9p1uiVLW1fNbF6nY88Bg1zXvF8TbsYeAwZZ96vt19qOPQYM8mctZ6tyE4ws+7qaVY09BQzUR6tb4uiWRLolkW5JdLDb32AydEsi3ZJItyTSLYl0SyLdkki3JNItiXRLIt2SSLck0i2JdEsi3ZJItyTSLYl0SyLdkki3JNItiXRLIt2SSLck0i2JdEsi3ZJItyTSLYl0SyLdkki3JNItiXRLIt2SSLck0i2JdEsi3ZJItyTSLYl0SyLdkki3JNItiXRLIt2SSLck0i2JdEsi3ZJItyTSLYl0SyLdkki3JNItiXRLIt2SSLck0i2JdEsi3ZJItyTSLYl0SyLdkki3JNItiXRLIt2SSLck0i2JdEsi3ZJItyTSLYl0SyLdkki3JNItiXRLIt2SSLck0i2JdEsi3ZJItyTSLYl0SyLdkki3JNItiXRLIt2SSLck0i2JdEsi3ZJItyTSLYl0SyLdkki3JNItiXRLIt2SSLck0i2JdEuij3cLE6dbEumWRH20q2rGngIG2dfV7Gudjz0GDLKt5WxXN2OPAYOs62w2r+uxx4BBrms+26+qHXsOGKCtu2uy21qMPQgMsOjXhPt6XZmRow/2fkO4rc6tMFI0XV3ef9h3NgViXFT341Pb1V/OuCRoFtU93kfYdM8OYLLuSt08HfZn3Fool2lrF/XqBLu/rarr9da6wDQ15+vrvtHL14W2u/psJ8dmbVefPhMTtro8tBM08923zw3lyJMRTTf2P4rJWH37ez6NbeCmrt5fqRePdzxgOo784PG9Vi4VmZ59996K21bNx54QDuivu95ccduu/hl7PjjonRX3opZjTwdveHPF/e4XPKbrrRV3W7UdezZ40+EV13LLxB1ccZf1Zey54F0HVlzLLZP364o7L69qMnmvV9z+2HLL9L1ccZvu/nVNmLoXK+6J1zTJ8HzF/dfTNKR4WnHbo0/lwmT8XHEfX46HBD9WXI+KE+VhxfWDA2HuVtyNR8VJ06+4nqYhz215VJw8+85yS6DWo+J80H8fQ939Kyl22gAAAABJRU5ErkJggg=="
              />
            </svg>
            <div className="text__comment__text">
              New Epom DSP 4.0 is a pure blast. They provided us with all we
              needed from the tech side to bring our advertising in-house.
              Usually, it takes years. We've managed in two weeks.
            </div>
          </div>
          <div className="text__ceo">
            <img src={ceo} alt="" className="text__ceo__img" />
            <div className="text__ceo__txt">Andrey Petrik</div>
            <div className="text__ceo__txt1">CEO at NetHunt</div>
          </div>
        </div>
        <svg
          className="inline"
          width="409"
          height="585"
          viewBox="0 0 409 585"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.46304 27.4334L24.9529 0L101.593 14.2745L158.834 0L215.969 14.2745L253.176 9.66983L300.241 32.2328H354.726L380.167 14.2745L406.562 32.2328L407.7 88.034L406.562 177.488L407.7 212.985L409 259.132L406.562 355.686L405.099 384.084V465.728L406.562 555.622L388.117 562.207L351.652 551.064L300.241 585L280.737 569.805L229.008 562.207L199.539 576.389H171.342L153.958 585L80.6042 562.207L47.1074 569.298L1.46304 552.342L0 480.097L2.76351 400.583L0 260.722L1.46304 142.161L2.76351 84.6545L1.46304 27.4334Z"
            fill="white"
          />
        </svg>
        <svg
          className="inline2"
          id="change"
          width="409"
          height="585"
          viewBox="0 0 409 585"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.46304 27.4334L24.9529 0L101.593 14.2745L158.834 0L215.969 14.2745L253.176 9.66983L300.241 32.2328H354.726L380.167 14.2745L406.562 32.2328L407.7 88.034L406.562 177.488L407.7 212.985L409 259.132L406.562 355.686L405.099 384.084V465.728L406.562 555.622L388.117 562.207L351.652 551.064L300.241 585L280.737 569.805L229.008 562.207L199.539 576.389H171.342L153.958 585L80.6042 562.207L47.1074 569.298L1.46304 552.342L0 480.097L2.76351 400.583L0 260.722L1.46304 142.161L2.76351 84.6545L1.46304 27.4334Z"
            fill="#7879F1"
          />
        </svg>

        <div className="form">
          <div className="form__text">
            <div className="form__text__title">Sign up</div>
            <div className="form__text__subtitle">
              before August 31 and pay $500 during the first three months
            </div>
          </div>
          <form className="forma">
            <input
              required
              type="text"
              placeholder="Name"
              className="forma__input"
            />
            <input
              required
              placeholder="Business email"
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              className="forma__input"
            />
            <select className="forma__select" placeholder="Name" required>
              <option hidden>Company type</option>
              <option>Ad Agency</option>
              <option>Ad Network</option>
              <option>Advertiser</option>
              <option>Publisher</option>
              <option>Other</option>
            </select>
            <button className="forma__button">Get Discount</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
