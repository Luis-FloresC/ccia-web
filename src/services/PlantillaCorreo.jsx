export async function getHtmlEmail(data) {
    console.log(data);
    const contentHTML = `
    <!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta content="telephone=no" name="format-detection">
    <!--[if gte mso 9]> <style>sup { font-size: 100% !important; }</style> <![endif]-->
    <!--[if gte mso 9]> <style>sup { font-size: 100% !important; }</style> <![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
    <title> Cámara de Comercio e Industrias
        de Atlántida</title>
    <style>
        .logo-p-t-b {
            padding-bottom: 33px;
            padding-top: 43px;
        }

        .greetings-txt {
            background-image: url(https://hxe.stripocdn.email/content/guids/CABINET_3acc2dbeb6d3989c0141ed4c5e214eda/images/59731571905663515.jpg);
            background-position: center top;
            background-color: #ffffff;
            background-repeat: no-repeat;
            padding-right: 80px;
            padding-left: 80px;
            padding-bottom: 125px;
        }

        .footer-txt {
            padding-right: 50px;
            padding-left: 50px;
            padding-top: 20px;
        }

        .footer-txt-p {
            font-size: 16px;
        }

        .footer-txt-block {
            background-image: url(https://hxe.stripocdn.email/content/guids/CABINET_3acc2dbeb6d3989c0141ed4c5e214eda/images/30171571658072243.jpg);
            background-position: center top;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-color: transparent;
        }

        .txt-recommend {
            padding-right: 70px;
        }

        .td-align-right {
            text-align: right;
        }

        .recommend-block {
            background-image: url(https://hxe.stripocdn.email/content/guids/CABINET_8589bdaaf1e1992d5dc82d81699f82f7/images/16451571054437953.jpg);
            background-position: center bottom;
            background-repeat: no-repeat;
            padding-top: 70px;
            padding-bottom: 10px;
        }

        .desk-ptb-50 {
            padding-top: 50px;
            padding-bottom: 50px;
        }

        .txt-pl {
            padding-left: 50px;
        }

        .footer-txt-p {
            font-size: 16px;
        }

        /*СТИЛИ КАРУСЕЛЬКИ*/
        .amp-heading {
            max-width: 290px;
        }

        .amp-subh {
            font-size: 16px;
        }

        .amp-p {
            font-size: 15px;
            color: #000000;
            font-family: 'open sans', 'helvetica neue', helvetica, arial, sans-serif;
            line-height: 200%;
            display: block;
            text-align: left;
        }

        .amp-p-mw-260 {
            max-width: 260px;
        }

        .amp-p-mw-240 {
            max-width: 240px;
        }

        .amp-p-p50b {
            padding-bottom: 50px;
        }

        .amp-carousel-button-next,
        .amp-carousel-button-prev {
            width: 30px;
            height: 30px;
            outline: none;
            border: none;
            background-color: transparent;
            background-repeat: no-repeat;
            background-size: cover;
            padding: 0;
            margin: 0;
            cursor: pointer;
            opacity: 0;
        }

        .amp-carousel-button-prev {
            left: 0;
            background-image: url(https://hxe.stripocdn.email/content/guids/CABINET_366ca9de771882866be694ab16971fd7/images/15611570806739656.png);
        }

        .amp-carousel-button-next {
            right: 0;
            background-image: url(https://hxe.stripocdn.email/content/guids/CABINET_366ca9de771882866be694ab16971fd7/images/49021570806786752.png);
        }

        .text-block {
            display: inline;
            flex-basis: 47%;
            flex-direction: column;
        }

        .kidburg-case-block {
            background-image: url(https://hxe.stripocdn.email/content/guids/CABINET_3acc2dbeb6d3989c0141ed4c5e214eda/images/9791571658072371.jpg);
            padding: 85px 60px 60px;
            padding-top: 40px;
            background-position: center bottom;
            background-repeat: no-repeat;
        }

        .amp-descr-block {
            padding-left: 35px;
        }

        .p-1 {
            padding-bottom: 38px;
        }

        .amp-heading-block {
            padding-bottom: 30px;
        }

        .amp-carousel-block {
            padding-left: 25px;
            padding-right: 10px;
            padding-bottom: 60px;
        }

        .amp-carousel-block-3 {
            padding-bottom: 50px;
        }

        .amp-banner {
            padding-bottom: 54px;
        }

        .amp-accordion-block {
            padding-right: 50px;
            padding-left: 50px;
        }

        section {
            background-color: transparent;
            border: none;
            outline: none;
            -webkit-tap-highlight-color: rgba(253, 7, 7, 0);
            -webkit-tap-highlight-color: transparent;
        }

        .amp-accordion-h2 {
            background-color: transparent;
            border: none;
            outline: none;
            text-decoration: underline;
            padding-bottom: 30px;
        }

        .amp-accordion-h2-right-1 {
            text-align: right;
            padding-right: 128px;
        }

        .amp-accordion-h2-right-2 {
            text-align: right;
            padding-right: 164px;
        }

        .amp-accordion-img-block-right {
            position: absolute;
            top: 26px;
            right: 40px;
            z-index: 100;
        }

        .amp-accordion-img-block-left {
            position: absolute;
            top: 40px;
            left: 0px;
            z-index: 100;
        }

        .text-block-p30l {
            padding-left: 30px;
        }
    </style>

    <script async custom-element="amp-accordion" src="https://cdn.ampproject.org/v0/amp-accordion-0.1.js"></script>
</head>

<body>
    <div class="es-wrapper-color">

        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
                <tr>
                    <td class="esd-email-paddings" valign="top">

                        <table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center" bgcolor="transparent"
                                        style="background-color: transparent;">
                                        <table bgcolor="transparent" class="es-content-body" align="center"
                                            cellpadding="0" cellspacing="0" width="700"
                                            style="background-color: transparent;">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-structure es-m-p20b" align="left"
                                                        style="border-radius: 30px 30px 0px 0px; background-color: #0086CD;">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="700" class="esd-container-frame"
                                                                        align="center" valign="top">
                                                                        <table cellpadding="0" cellspacing="0"
                                                                            width="100%"
                                                                            style="background-size: 100%; background-position: left top;">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center"
                                                                                        class="esd-block-image logo-p-t-b"
                                                                                        style="font-size: 0px;"><a
                                                                                            target="_blank"
                                                                                            href="http://email-competitors.ru/"><img
                                                                                                src="https://i.ibb.co/YycLw4C/ccia-logo-2.png"
                                                                                                alt="Logo"
                                                                                                style="display: block;"
                                                                                                height="50"
                                                                                                title="Email-Competitors коллекция рассылок"
                                                                                                class="m-logo-m"
                                                                                                sizes="(max-width:600px) 140px, 204px"></a>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="center"
                                                                                        class="esd-block-image es-m-p30b amp-banner"
                                                                                        style="color: #ffffff;">

                                                                                        Cámara de Comercio e Industrias
                                                                                        de Atlántida

                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="esd-structure esd-checked es-m-p20l es-m-p20r es-m-p40b m-bg-none es-p40t"
                                                        align="left"
                                                        style="background-position: center top; background-color: #ffffff; background-repeat: no-repeat; padding-right: 80px; padding-left: 80px; padding-bottom: 125px;"
                                                        bgcolor="#ffffff">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="540" class="esd-container-frame"
                                                                        align="center" valign="top">
                                                                        <table cellpadding="0" cellspacing="0"
                                                                            width="100%"
                                                                            style="background-position: center top;">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="left"
                                                                                    style="color: #000000 !important;"
                                                                                        class="esd-block-text es-p10b">
                                                                                        <p style="color: #000000 !important;">Hola ${data[0].nombre}!</p>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="left"
                                                                                    style="color: #000000 !important;"
                                                                                        class="esd-block-text es-p10b">
                                                                                        <p style="color: #000000 !important;">${data[0].mensaje}</p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="esd-structure m-bg-auto" align="left"
                                                        style="background-size: 100% 100%; background-color: transparent; background-position: center top;"
                                                        bgcolor="transparent">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr class="es-visible-amp-html-only">
                                                                    <td width="700" class="esd-container-frame"
                                                                        align="center" valign="top">
                                                                        <table cellpadding="0" cellspacing="0"
                                                                            width="100%"
                                                                            style="background-position: center top; background-color: #0086CD; border-radius: 0 0 30px 30px; border-collapse: separate;">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="middle" class=""
                                                                                        style="padding-bottom: 20px; align-items: center; text-decoration: none !important; color: #ffffff !important;">
                                                                                       <br> Copyright 2021- 2023 ©
                                                                                        <a target="_blank"
                                                                                            style="padding: 5px; text-decoration: none !important; color: #ffffff !important;"
                                                                                            href="#">
                                                                                            Cámara de Comercio e
                                                                                            Industrias de Atlántida
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>

</html>
    `;


    return contentHTML;
}
