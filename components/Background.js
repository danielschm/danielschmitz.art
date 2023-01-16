export default ({backdrop}) => (
    <>
        {
            backdrop ?
                <>
                    <div className="bg"/>
                    <div className="bg-blur"/>
                    <div className="backdrop"/>
                </>
                :
                <>
                    <div className="bg"/>
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
            z-index: -2;
            height: 100%;
            width: 100%;
            position: fixed;
            background-image: url("/img/background2.jpg");
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
            background-image: url("/img/background2.jpg");
            background-position: 40% 80%;
            background-repeat: no-repeat;
            background-color: var(--background);
            background-attachment: fixed;
            -webkit-filter: blur(8px);
            -moz-filter: blur(8px);
            -o-filter: blur(8px);
            -ms-filter: blur(8px);
            filter: blur(8px);
          }
        `}</style>
    </>
);