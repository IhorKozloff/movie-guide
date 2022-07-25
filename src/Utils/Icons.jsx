import React from "react";
import PropTypes from 'prop-types';

export const IconSVG = ({id}) => {
    switch(id) {
        case 'header-logo-icon':
        return (
            <svg id="header-logo-icon" width="30px" height="30px" fill="#fff" viewBox="0 0 32 32">
                <path fill="#818181"  d="M5.573 1.333c-2.326 0-4.24 1.914-4.24 4.24v20.854c0 2.326 1.914 4.24 4.24 4.24h20.854c2.326 0 4.24-1.914 4.24-4.24v-20.854c0-2.326-1.914-4.24-4.24-4.24zM5.573 4h20.854c0.885 0 1.573 0.688 1.573 1.573v20.854c0 0.885-0.688 1.573-1.573 1.573h-20.854c-0.885 0-1.573-0.688-1.573-1.573v-20.854c0-0.885 0.688-1.573 1.573-1.573z"></path>
                <path fill="#818181"  d="M9.333 1.333c-0.736 0-1.333 0.597-1.333 1.333v0 26.667c0 0.736 0.597 1.333 1.333 1.333v0c0.736 0 1.333-0.597 1.333-1.333v0-26.667c0-0.736-0.597-1.333-1.333-1.333v0z"></path>
                <path fill="#818181"  d="M22.667 1.333c-0.736 0-1.333 0.597-1.333 1.333v0 26.667c0 0.736 0.597 1.333 1.333 1.333v0c0.736 0 1.333-0.597 1.333-1.333v0-26.667c0-0.736-0.597-1.333-1.333-1.333v0z"></path>
                <path fill="#818181"  d="M2.667 14.667c-0.736 0-1.333 0.597-1.333 1.333v0c0 0.736 0.597 1.333 1.333 1.333v0h26.667c0.736 0 1.333-0.597 1.333-1.333v0c0-0.736-0.597-1.333-1.333-1.333v0z"></path>
                <path fill="#818181"  d="M2.667 8c-0.736 0-1.333 0.597-1.333 1.333v0c0 0.736 0.597 1.333 1.333 1.333v0h6.667c0.736 0 1.333-0.597 1.333-1.333v0c0-0.736-0.597-1.333-1.333-1.333v0z"></path>
                <path fill="#818181"  d="M2.667 21.333c-0.736 0-1.333 0.597-1.333 1.333v0c0 0.736 0.597 1.333 1.333 1.333v0h6.667c0.736 0 1.333-0.597 1.333-1.333v0c0-0.736-0.597-1.333-1.333-1.333v0z"></path>
                <path fill="#818181"  d="M22.667 21.333c-0.736 0-1.333 0.597-1.333 1.333v0c0 0.736 0.597 1.333 1.333 1.333v0h6.667c0.736 0 1.333-0.597 1.333-1.333v0c0-0.736-0.597-1.333-1.333-1.333v0z"></path>
                <path fill="#818181"  d="M22.667 8c-0.736 0-1.333 0.597-1.333 1.333v0c0 0.736 0.597 1.333 1.333 1.333v0h6.667c0.736 0 1.333-0.597 1.333-1.333v0c0-0.736-0.597-1.333-1.333-1.333v0z"></path>
            </svg>
        )
        case 'search-icon':
        return (
                <svg id="search-icon" viewBox="0 0 32 32" width="12px" height="12px" fill="#fff">
                    <path fill="#fff" d="M14.667 2.667c-6.612 0-12 5.388-12 12s5.388 12 12 12c6.612 0 12-5.388 12-12s-5.388-12-12-12zM14.667 5.333c5.17 0 9.333 4.163 9.333 9.333s-4.163 9.333-9.333 9.333c-5.17 0-9.333-4.163-9.333-9.333s4.163-9.333 9.333-9.333z"></path>
                    <path fill="#fff" d="M22.198 20.87c-0.002 0-0.003 0-0.005 0-0.366 0-0.697 0.147-0.938 0.386l0-0c-0.243 0.242-0.393 0.576-0.393 0.945s0.15 0.704 0.393 0.945l5.802 5.797c0.241 0.241 0.575 0.39 0.943 0.39s0.701-0.149 0.943-0.39v0c0.241-0.241 0.39-0.575 0.39-0.943s-0.149-0.701-0.39-0.943l-5.802-5.802c-0.241-0.238-0.572-0.385-0.938-0.385-0.002 0-0.004 0-0.005 0h0z"></path>
                </svg>
        )
        case 'icon-light-theme':
        return (
                <svg id="icon-light-theme" viewBox="0 0 32 32" width="30px" height="30px" fill="#fff">
                    <path d="M16.001 8c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 7.999-3.582 7.999-8s-3.581-8-7.999-8v0zM14 2c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM4 6c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM2 14c1.105 0 2 0.895 2 2 0 1.107-0.895 2-2 2s-2-0.893-2-2c0-1.105 0.895-2 2-2zM4 26c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM14 30c0-1.109 0.895-2 2-2 1.108 0 2 0.891 2 2 0 1.102-0.892 2-2 2-1.105 0-2-0.898-2-2zM24 26c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM30 18c-1.104 0-2-0.896-2-2 0-1.107 0.896-2 2-2s2 0.893 2 2c0 1.104-0.896 2-2 2zM24 6c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2z"></path>
                </svg>
        )
        case 'icon-dark-theme':
        return (
                <svg id="icon-dark-theme" viewBox="0 0 32 32" width="30px" height="30px" fill="#fff">
                    <path d="M24.633 22.184c-8.188 0-14.82-6.637-14.82-14.82 0-2.695 0.773-5.188 2.031-7.363-6.824 1.968-11.844 8.187-11.844 15.644 0 9.031 7.32 16.355 16.352 16.355 7.457 0 13.68-5.023 15.648-11.844-2.18 1.254-4.672 2.028-7.367 2.028z"></path>
                </svg>
        )
        case 'icon-modal-close-btn':
        return (
                <svg id="icon-modal-close-btn" viewBox="0 0 32 32" width="12px" height="12px" >
                    <path d="M1.455 0c-0.402 0-0.765 0.163-1.028 0.426v0c-0.263 0.263-0.426 0.627-0.426 1.028s0.163 0.765 0.426 1.028l13.517 13.517-13.517 13.517c-0.263 0.263-0.426 0.627-0.426 1.028s0.163 0.765 0.426 1.028v0c0.263 0.263 0.627 0.426 1.028 0.426s0.765-0.163 1.028-0.426l13.517-13.517 13.517 13.517c0.263 0.263 0.627 0.426 1.028 0.426s0.765-0.163 1.028-0.426v0c0.263-0.263 0.426-0.627 0.426-1.028s-0.163-0.765-0.426-1.028l-13.517-13.517 13.517-13.517c0.263-0.263 0.426-0.627 0.426-1.028s-0.163-0.765-0.426-1.028v0c-0.263-0.263-0.627-0.426-1.028-0.426s-0.765 0.163-1.028 0.426l-13.517 13.517-13.517-13.517c-0.263-0.263-0.627-0.426-1.028-0.426v0z"></path>
                </svg>
        )
        case 'icon-circle-left':
        return (
                <svg id="icon-circle-left" viewBox="0 0 32 32" width="40px" height="20px" fill="#000">
                    <path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13z"></path>
                    <path d="M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z"></path>
                </svg>
        )
        case 'icon-YouTube':
        return (
                <svg id="icon-YouTube" viewBox="0 0 48 32" width="200px" height="180px" fill="red">
                    <path d="M31.681 9.6c0 0-0.313-2.206-1.275-3.175-1.219-1.275-2.581-1.281-3.206-1.356-4.475-0.325-11.194-0.325-11.194-0.325h-0.012c0 0-6.719 0-11.194 0.325-0.625 0.075-1.987 0.081-3.206 1.356-0.963 0.969-1.269 3.175-1.269 3.175s-0.319 2.588-0.319 5.181v2.425c0 2.587 0.319 5.181 0.319 5.181s0.313 2.206 1.269 3.175c1.219 1.275 2.819 1.231 3.531 1.369 2.563 0.244 10.881 0.319 10.881 0.319s6.725-0.012 11.2-0.331c0.625-0.075 1.988-0.081 3.206-1.356 0.962-0.969 1.275-3.175 1.275-3.175s0.319-2.587 0.319-5.181v-2.425c-0.006-2.588-0.325-5.181-0.325-5.181zM12.694 20.15v-8.994l8.644 4.513-8.644 4.481z"></path>
                </svg>
        )
        case 'burger-mnu-btn':
        return (
                <svg id="burger-mnu-btn" viewBox="0 0 24 24" width="48px" height="48px" fill="white">
                    <path d="M21 9h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1zM21 5h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1zM21 13h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1zM21 17h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path>
                </svg>
        )
        default:
        return <svg></svg>
    }
}

IconSVG.propTypes = {
    id: PropTypes.string.isRequired,
}