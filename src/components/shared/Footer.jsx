import fbicon from '../../../assets/images/facebook.png'
import instaicon from '../../../assets/images/instagram.png'
import tweeticon from '../../../assets/images/twitter.png'


const Footer = () => {
    return (
        <div className='bg-[#244D3F]'>
            <div className="max-w-[80%] mx-auto text-center ">
               <h1 className="text-white text-7xl font-semibold pt-20 pb-4 ">KeenKeeper</h1>
               <p className="text-white text-center opacity-100 pb-6">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            </div>
            <h2 className='text-white text-2xl opacity-100 text-center'>Social Links</h2>
            <div className='flex items-center justify-center gap-3 pt-4 pb-10'>
                <img src={fbicon} alt="" />
                <img src={instaicon} alt="" />
                <img src={tweeticon} alt="" />
            </div>
            <hr className='pt-10 container mx-auto border-amber-50 ' />
            <div className='flex justify-between max-w-[80%] mx-auto '>
                <p className='opacity-100 text-white'>© 2026 KeenKeeper. All rights reserved.</p>
                <div className='text-white flex opacity-100 gap-4 pb-4'>
                    <p>Privacy Policy</p>
                    <p>Terms of Services</p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;