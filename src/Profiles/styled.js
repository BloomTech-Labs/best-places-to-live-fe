import React from 'react-router-dom';
import styled from 'styled-components';

export const MyBody = styled.body`
    font-size: 62.5%;
    line-height: 1.6;
    font-weight: 300;
    font-family: 'Lato', sans-serif;
    color: #777;
    padding: 3rem;
    min-height: 100vh;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
`;

export const ProfileColors = styled.main`
    background-color: #f7f7f7;
    -webkit-box-flex: 1;
    flex: 1;
    position: relative;
`;

export const UserView = styled.div`
    background-color: #fff;
    max-width: 120rem;
    margin: 0 auto;
    min-height: 100vh;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.07);
    display: flex;
`;

export const UserViewMenu = styled.nav`
    flex: 32rem 0 0;
    background-image: linear-gradient(to right bottom, #7dd56f, #28b487);
    padding: 4rem 0;
`;

export const SideNav = styled.div`
    list-style: none;
`;


export const SideNavLi = styled.div`
    margin: 1rem 0;
    border-left: 0 solid #fff;
    transition: all 0.3s;
`;

export const SideNavLiA = styled.div`
    padding: 1rem 4rem;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: #fff;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 400;
    text-decoration: none;
    transition: all 0.3s;
`;

export const UserViewContent = styled.div`
   -webkit-box-flex: 1;
    flex: 1;
    padding: 7rem 0;
`;

export const UserViewFormContainer = styled.div`
    max-width: 68rem;
    margin: 0 auto;
    padding: 0 8rem;
`;

export const HeadingSecondaryMaBtMd = styled.h2`
    max-width: 68rem;
    margin: 0 auto;
    padding: 0 8rem;
    max-width: 68rem;
    margin: 0 auto;
    padding: 0 8rem;
`;

export const FormGroup = styled.div`
    margin-bottom: 2.5rem;
`;

export const FormGroupMaBtMd = styled.div`
   margin-bottom: 3rem !important;
`;

export const FormGroupFormPhotoUpload = styled.div`
   margin-bottom: 2.5rem;
   display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 1.6rem;
`;

export const FormUserPhoto = styled.div`
    height: 7.5rem;
    width: 7.5rem;
    border-radius: 50%;
    margin-right: 2rem;
`;

export const FormGroupRight = styled.div`
   /* text-align: right !important; */
   padding: 15% 10%;
`;

export const Button = styled.div`
    padding: 1.25rem 3rem !important;
    font-size: 1.1rem !important;
    background-color: #55c57a;
    color: #fff;
    border-radius: 10rem;
    text-transform: uppercase;
    display: inline-block;
    text-decoration: none;
    position: relative;
    transition: all 0.4s;
    font-weight: 400;
    backface-visibility: hidden;
    border: none;
    cursor: pointer;
`;
