export default ({backdrop}) => (
    <>
        <div className="bg-gradient"/>
        <div className="bg-color"/>
        <div className="bg-texture"/>
        {
            backdrop ?
                <>
                    <div className="bg-blur"/>
                    <div className="backdrop"/>
                </>
                :
                <>
                </>
        }
        <style jsx>{`
          .backdrop {
            z-index: -1;
            background: rgba(0, 0, 0, 0.2);
            height: 100%;
            width: 100%;
            position: fixed;
          }

          .bg-texture {
            z-index: -3;
            height: 100%;
            width: 100%;
            position: fixed;
            //background-image: url("/img/px_by_Gre3g.png");
            background-image: url("/img/clouds.jpg");
            background-repeat: repeat;
            background-blend-mode: luminosity;
            mix-blend-mode: overlay;
            opacity: 10%;
          }

          .bg-color {
            z-index: -4;
            height: 100%;
            width: 100%;
            position: fixed;
            background: var(--background);
            opacity: 80%;
          }

          .bg-gradient {
            z-index: -5;
            height: 100%;
            width: 100%;
            position: fixed;
            background: linear-gradient(340deg, black, var(--foreground));
          }

          .bg-blur {
            z-index: -2;
            height: 100%;
            width: 100%;
            position: fixed;
            //background-image: url("/img/background.jpg");
            background-position: 40% 80%;
            background-repeat: no-repeat;
            background-color: var(--background);
            background-attachment: fixed;
            -webkit-filter: blur(5px);
            -moz-filter: blur(5px);
            -o-filter: blur(5px);
            -ms-filter: blur(5px);
            filter: blur(5px);
          }
        `}</style>
    </>
);