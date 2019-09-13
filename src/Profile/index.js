import React, { Fragment } from 'react';
import Navigation from '../Navigation';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { MyBody, ProfileColors, UserView, UserViewMenu, SideNav, UserViewContent, UserViewFormContainer,
    HeadingSecondaryMaBtMd, FormGroup, FormGroupMaBtMd, FormGroupFormPhotoUpload, FormUserPhoto, FormGroupRight, Button, SideNavLi, SideNavLiA, Icon  } from './styled';


const Profile = () => {
    return(
        <div>
            <Navigation />
       <MyBody>
         <ProfileColors>
             <UserView>
                 <UserViewMenu>
                     <SideNav>
                      <SideNavLi>
                             <SideNavLiA as="a" href="#"> <Icon><i class="far fa-user"></i></Icon>
                                Profile
                             </SideNavLiA>
                       </SideNavLi>
                       <SideNavLi>
                            <SideNavLiA as="a" href="#"><Icon><i class="far fa-star"></i></Icon>Saved Cities
                           </SideNavLiA>
                       </SideNavLi>
                       <SideNavLi>
                            <SideNavLiA as="a" href="#"><Icon><i class="far fa-comment-alt"></i></Icon>Messages
                           </SideNavLiA>
                       </SideNavLi>
                       <SideNavLi>
                            <SideNavLiA as="a" href="#"><Icon><i class="fas fa-city"></i></Icon>Become a City Specialist
                            </SideNavLiA>
                       </SideNavLi>
                     </SideNav>
                 </UserViewMenu>
                 <UserViewContent>
                     <UserViewFormContainer>
                        <HeadingSecondaryMaBtMd>
                            Your Profile Settings
                        </HeadingSecondaryMaBtMd>
                     </UserViewFormContainer>
                     <FormGroup>
                         <form action="">
                        <label class="form-label" for="name">Name</label>
                        <input class="form-input" id="name" type="text" value="Richard Branson" required name="name"/>
                        </form>
                     </FormGroup>
                     <FormGroupMaBtMd>
                        <form action="">
                            <label class="form-label" for="email">Email address</label>
                            <input class="form-input" id="email" type="email" value="richard@virgin.com" required name="email"/>
                        </form>
                     </FormGroupMaBtMd>
                     <FormGroupFormPhotoUpload>
                        <FormUserPhoto>
                          <img src="/img/users/user-14.jpg" alt="User photo" />
                          <input class="form_upload" id="photo" type="file" accept="image/*" name="photo"/>
                          <label for="photo">Choose new photo</label>
                        </FormUserPhoto>
                     </FormGroupFormPhotoUpload>
                    <FormGroupRight>
                            <Button>Save Profile</Button>
                    </FormGroupRight>
                 </UserViewContent>
            </UserView>
        </ProfileColors>
       </MyBody>
    </div>
    )
};

export default Profile;
