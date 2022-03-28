export default ({backdrop}) => (
    <>
        <div className="bg"/>
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

          .bg {
            z-index: -3;
            height: 100%;
            width: 100%;
            position: fixed;
            //background-image: url("/img/background.jpg");
            background-position: 40% 80%;
            background-repeat: no-repeat;
            background-color: var(--background);
            background-attachment: fixed;
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