import React, { Fragment } from 'react';
import Navigation from '../Navigation';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { MyBody, ProfileColors, UserView, UserViewMenu, SideNav, UserViewContent, UserViewFormContainer,
    HeadingSecondary, FormUserData, FormGroup, FormGroupMaBtMd, FormGroupFormPhotoUpload, Image, FormInputUpload, FormUploadLabel, FormGroupRight, Button, SideNavLi, SideNavLiA, Icon, Label, Input, Line  } from './styled';

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
                        <HeadingSecondary>
                            Profile Settings
                        </HeadingSecondary>
                        <FormUserData>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input id="name" type="text" value="" required name="name" placeholder="Richard Branson"/>
                            </FormGroup>
                            <FormGroupMaBtMd>
                                    <Label for="email">Email address</Label>
                                    <Input id="email" type="email" value="" required name="email" placeholder="richard@virgin.com"/>
                            </FormGroupMaBtMd>
                            <FormGroupFormPhotoUpload>
                                <Image src="https://www.biography.com/.image/t_share/MTE4MDAzNDEwNDYyNDEwMjU0/sir-richard-branson-9224520-1-402.jpg" />
                                <FormInputUpload id="photo" type="file" accept="image/*" name="photo"/>
                                <FormUploadLabel for="photo">Choose new photo</FormUploadLabel>
                            </FormGroupFormPhotoUpload>
                            <FormGroupRight>
                                    <Button>Save Profile</Button>
                            </FormGroupRight>
                        </FormUserData>
                  </UserViewFormContainer>
                  <Line>&nbsp;</Line>
                  <UserViewFormContainer>
                         <HeadingSecondary>
                            Password Change
                        </HeadingSecondary>
                        <FormUserData>
                            <FormGroup>
                                <Label for="password-current">Current password</Label>
                                <Input id="password-current" type="password" placeholder="••••••••" required minlength="8" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">New password</Label>
                                <Input id="password" type="password" placeholder="••••••••" required minlength="8" />
                            </FormGroup>
                            <FormGroupMaBtMd>
                                    <Label for="password-confirm">Confirm password</Label>
                                    <Input id="password-confirm" type="password" placeholder="••••••••" required minlength="8" />
                            </FormGroupMaBtMd>
                            <FormGroupRight>
                                    <Button>Save Password</Button>
                            </FormGroupRight>
                        </FormUserData>
                  </UserViewFormContainer>
              </UserViewContent>
            </UserView>
        </ProfileColors>
       </MyBody>
    </div>
    )
};

export default Profile;
