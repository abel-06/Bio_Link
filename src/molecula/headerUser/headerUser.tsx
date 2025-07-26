import userImage from "../../assets/images/UserPhoto.jpg"

export const UserHeader = () => {
  return (
    <div className=" bg-darkRoxo flex p-normal rounded-normal w-[98%] m-auto mb-5 mt-5 gap-4">
      <img 
      className="userImage h-[4rem] rounded-[0.75rem]"
      src= {userImage}
       alt="UserImage" />

       <div className="headerTextContainer self-center">
        <h1 className="userName text-emerald-50 font-extrabold text-2xl">Abel Melquiades</h1>
        <h2 className="userProfission font-belleza text-emerald-50 font-medium text-xg">FullStack Developer</h2>
       </div>
    </div>
  )
}