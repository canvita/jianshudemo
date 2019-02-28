import React from 'react';
import { DownloadLinkWrapper } from '../styled';

const DownloadLink = (props) => (

  <DownloadLinkWrapper>
    <img className="qrcode"
    alt=''
    src="http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
    />
    <div className="content"> 
      <div className="title">下载简书手机App</div>
      <div className="desp">随时随地发现和创作内容</div>
    </div>
  </DownloadLinkWrapper>
)

export default DownloadLink;


          