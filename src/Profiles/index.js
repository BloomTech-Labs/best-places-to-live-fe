import React, { Fragment } from 'react';
import Navigation from '../Navigation';
import { MyBody, ProfileColors, UserView, UserViewMenu, SideNav, UserViewContent, UserViewFormContainer,
    HeadingSecondaryMaBtMd, FormGroup, FormGroupMaBtMd, FormGroupFormPhotoUpload, FormUserPhoto, FormGroupRight, Button, SideNavLi, SideNavLiA  } from './styled';


const Profiles = () => {
    return(
        <div>
            <Navigation />
       <MyBody>
         <ProfileColors>
             <UserView>
                 <UserViewMenu>
                     <SideNav>
                      <SideNavLi>
                        <li>
                             <SideNavLiA as="a" href="#">Profile
                             </SideNavLiA>
                        </li>
                       </SideNavLi>
                       <SideNavLi>
                        <li>
                            <SideNavLiA as="a" href="#">Saved Cities
                           </SideNavLiA>
                        </li>
                       </SideNavLi>
                       <SideNavLi>
                        <li>
                            <SideNavLiA as="a" href="#">Messages
                           </SideNavLiA>
                        </li>
                       </SideNavLi>
                       <SideNavLi>
                        <li>
                            <SideNavLiA as="a" href="#">City Specialist
                            </SideNavLiA>
                        </li>
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

export default Profiles;
