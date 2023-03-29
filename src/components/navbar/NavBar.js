import React from 'react'
import { BsFillSunFill } from 'react-icons/bs'
import { IoIosMoon } from 'react-icons/io'
import { Link } from 'react-router-dom'
import './navbar.css'

function NavBar() {

  // const homePage = document.getElementById('section1')
  // const indicate = document.getElementById('indicator')
  // const body = document.querySelector('body')
  // const menuBox = document.getElementById('menu_box')
  // const navLink = document.querySelector('.nav_links')
  // const explorePage = document.getElementById('section2')
  // const bookPage = document.getElementById('section3')
  // const aboutPage = document.getElementById('section4')



  const shake = () => {
    const homePage = document.getElementById('section1')
    homePage.scrollIntoView({behavior: 'smooth', block: 'end'})
  }


  const themeChanger = () => {
    const indicate = document.getElementById('indicator')
    const body = document.querySelector('body')
    indicate.classList.toggle('dark')
    body.classList.toggle('dark')
  }

  const menu = () => {
    const menuBox = document.getElementById('menu_box')
    const navLink = document.querySelector('.nav_links')
    menuBox.classList.toggle('clicked')
    navLink.classList.toggle('show')
  }

  const link = () => {
    const menuBox = document.getElementById('menu_box')
    const navLink = document.querySelector('.nav_links')

    setTimeout(() => {
        menuBox.classList.remove('clicked')
        navLink.classList.remove('show')

    }, 100);
  }