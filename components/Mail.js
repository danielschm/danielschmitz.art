import React from "react";

const MailLink = props => {
    function openMail() {
        const s = 'nbjmup;dpoubduAebojfmtdinju{/bsu';
        var n = 0;
        var r = "";
        for (var i = 0; i < s.length; i++) {
            n = s.charCodeAt(i);
            if (n >= 8364) {
                n = 128;
            }
            r += String.fromCharCode(n - 1);
        }
        window.location.href = r;
    }

    return (
        <a onClick={openMail}>
            {props.children}
            <style jsx>{`
              a {
                cursor: pointer;
              }
            `}</style>
        </a>
    );
};

export default MailLink;