import * as React from "react";
import styled from "styled-components";

const StyledDiv = styled.div<{
  offsetY: number;
  offsetX: number;
  opacity: number;
  rotate: number;
}>`
  position: absolute;
  top: ${(p) => p.offsetY}%;
  bottom: ${(p) => -p.offsetY}%;
  left: ${(p) => p.offsetX}%;
  right: ${(p) => -p.offsetX}%;
  content: "";
  transform: rotate(${(p) => p.rotate}deg);
  opacity: ${(p) => p.opacity};
  z-index: -1;
`;
function Dots2({
  color = "blue",
  offsetY = 10,
  offsetX = 10,
  opacity = 0.5,
  rotate = 180,
}) {
  return (
    <StyledDiv {...{ offsetX, offsetY, rotate, opacity }}>
      <svg
        viewBox="0 0 564 567"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit={2}
      >
        <g transform="matrix(.9662 0 0 .9705 -2106.4 -624.709)">
          <path fill="none" d="M2180.09 643.701h583.333v583.333H2180.09z" />
          <clipPath id="prefix__a">
            <path d="M2180.09 643.701h583.333v583.333H2180.09z" />
          </clipPath>
          <g clipPath="url(#prefix__a)">
            <g transform="matrix(4.30991 0 0 4.29082 1502.35 -30.333)">
              <clipPath id="prefix__b">
                <path d="M155 155h140v140H155z" />
              </clipPath>
              <g clipPath="url(#prefix__b)" fill={color} fillRule="nonzero">
                <path d="M160.833 161.658a.825.825 0 100-1.65.825.825 0 000 1.65zM166.667 161.674a.841.841 0 100-1.682.841.841 0 000 1.682zM172.5 161.707a.874.874 0 100-1.749.874.874 0 000 1.749zM178.333 161.723a.89.89 0 10.001-1.779.89.89 0 00-.001 1.779zM184.167 161.739a.906.906 0 10-.001-1.811.906.906 0 00.001 1.811zM190 161.755a.922.922 0 100-1.845.922.922 0 000 1.845zM195.833 161.788a.956.956 0 10-.001-1.911.956.956 0 00.001 1.911zM201.667 161.804a.97.97 0 10-.001-1.941.97.97 0 00.001 1.941zM207.5 161.82a.987.987 0 100-1.974.987.987 0 000 1.974zM213.333 161.836a1.003 1.003 0 100-2.006 1.003 1.003 0 000 2.006zM219.167 161.869a1.036 1.036 0 10-.002-2.072 1.036 1.036 0 00.002 2.072zM225 161.885a1.052 1.052 0 100-2.104 1.052 1.052 0 000 2.104zM230.833 161.901a1.068 1.068 0 100-2.136 1.068 1.068 0 000 2.136zM236.667 161.917a1.083 1.083 0 100-2.165 1.083 1.083 0 000 2.165zM242.5 161.95a1.117 1.117 0 10-.001-2.233 1.117 1.117 0 00.001 2.233zM248.333 161.966a1.133 1.133 0 100-2.267 1.133 1.133 0 000 2.267zM254.167 161.982a1.148 1.148 0 100-2.296 1.148 1.148 0 000 2.296zM260 161.998a1.164 1.164 0 100-2.33 1.165 1.165 0 100 2.33zM265.833 162.014a1.182 1.182 0 000-2.362 1.182 1.182 0 000 2.362zM271.667 162.046a1.213 1.213 0 100-2.426 1.213 1.213 0 000 2.426zM277.5 162.063a1.23 1.23 0 10-.001-2.46 1.23 1.23 0 00.001 2.46zM283.333 162.079a1.246 1.246 0 100-2.492 1.246 1.246 0 000 2.492zM289.167 162.095a1.263 1.263 0 10-.001-2.525 1.263 1.263 0 00.001 2.525zM160.833 167.508a.841.841 0 100-1.682.841.841 0 000 1.682zM166.667 167.54a.873.873 0 100-1.746.873.873 0 000 1.746zM172.5 167.556a.89.89 0 100-1.78.89.89 0 000 1.78zM178.333 167.572a.906.906 0 100-1.811.906.906 0 000 1.811zM184.167 167.589a.922.922 0 100-1.845.922.922 0 000 1.845zM190 167.621a.955.955 0 100-1.91.955.955 0 000 1.91zM195.833 167.637a.97.97 0 10.001-1.941.97.97 0 00-.001 1.941zM201.667 167.653a.987.987 0 10-.001-1.973.987.987 0 00.001 1.973zM207.5 167.669a1.002 1.002 0 10.002-2.004 1.002 1.002 0 00-.002 2.004zM213.333 167.702a1.036 1.036 0 100-2.072 1.036 1.036 0 000 2.072zM219.167 167.718a1.052 1.052 0 10-.001-2.103 1.052 1.052 0 00.001 2.103zM225 167.734a1.067 1.067 0 100-2.135 1.067 1.067 0 000 2.135zM230.833 167.75a1.083 1.083 0 10.001-2.167 1.083 1.083 0 00-.001 2.167zM236.667 167.783a1.116 1.116 0 100-2.233 1.116 1.116 0 000 2.233zM242.5 167.799a1.132 1.132 0 100-2.264 1.132 1.132 0 000 2.264zM248.333 167.815a1.147 1.147 0 100-2.297 1.148 1.148 0 000 2.297zM254.167 167.832a1.165 1.165 0 10-.001-2.33 1.165 1.165 0 00.001 2.33zM260 167.848a1.181 1.181 0 100-2.363 1.181 1.181 0 000 2.363zM265.833 167.88a1.214 1.214 0 100-2.428 1.214 1.214 0 000 2.428zM271.667 167.896a1.229 1.229 0 100-2.457 1.229 1.229 0 000 2.457zM277.5 167.912a1.245 1.245 0 100-2.49 1.245 1.245 0 000 2.49zM283.333 167.928a1.262 1.262 0 100-2.524 1.262 1.262 0 000 2.524zM289.167 167.944a1.277 1.277 0 100-2.553 1.277 1.277 0 000 2.553zM160.833 173.374a.874.874 0 100-1.749.874.874 0 000 1.749zM166.667 173.39a.89.89 0 10-.002-1.78.89.89 0 00.002 1.78zM172.5 173.406a.906.906 0 100-1.813.906.906 0 000 1.813zM178.333 173.422a.922.922 0 100-1.845.922.922 0 000 1.845zM184.167 173.455a.955.955 0 10-.001-1.91.955.955 0 00.001 1.91zM190 173.471a.971.971 0 100-1.943.971.971 0 000 1.943zM195.833 173.487a.987.987 0 100-1.974.987.987 0 000 1.974zM201.667 173.503a1.002 1.002 0 100-2.004 1.002 1.002 0 000 2.004zM207.5 173.535a1.035 1.035 0 10.001-2.069 1.035 1.035 0 00-.001 2.069zM213.333 173.551a1.051 1.051 0 10.002-2.102 1.051 1.051 0 00-.002 2.102zM219.167 173.567a1.067 1.067 0 100-2.133 1.067 1.067 0 000 2.133zM225 173.584a1.084 1.084 0 100-2.167 1.084 1.084 0 000 2.167zM230.833 173.616a1.116 1.116 0 100-2.233 1.116 1.116 0 000 2.233zM236.667 173.632a1.132 1.132 0 100-2.264 1.132 1.132 0 000 2.264zM242.5 173.648a1.147 1.147 0 10.001-2.295 1.147 1.147 0 00-.001 2.295zM248.333 173.665a1.165 1.165 0 100-2.33 1.165 1.165 0 000 2.33zM254.167 173.681a1.182 1.182 0 10-.002-2.364 1.182 1.182 0 00.002 2.364zM260 173.713a1.213 1.213 0 100-2.426 1.213 1.213 0 000 2.426zM265.833 173.729a1.229 1.229 0 10.002-2.458 1.229 1.229 0 00-.002 2.458zM271.667 173.746a1.246 1.246 0 10-.002-2.492 1.246 1.246 0 00.002 2.492zM277.5 173.762a1.262 1.262 0 100-2.524 1.262 1.262 0 000 2.524zM283.333 173.778a1.278 1.278 0 100-2.556 1.278 1.278 0 000 2.556zM289.167 173.794a1.294 1.294 0 100-2.587 1.294 1.294 0 000 2.587zM160.833 179.223a.89.89 0 10.001-1.779.89.89 0 00-.001 1.779zM166.667 179.239a.906.906 0 10-.001-1.811.906.906 0 00.001 1.811zM172.5 179.255a.922.922 0 100-1.845.922.922 0 000 1.845zM178.333 179.288a.956.956 0 10-.001-1.911.956.956 0 00.001 1.911zM184.167 179.304a.97.97 0 10-.001-1.941.97.97 0 00.001 1.941zM190 179.32a.987.987 0 100-1.974.987.987 0 000 1.974zM195.833 179.336a1.003 1.003 0 100-2.006 1.003 1.003 0 000 2.006zM201.667 179.369a1.036 1.036 0 10-.002-2.072 1.036 1.036 0 00.002 2.072zM207.5 179.385a1.051 1.051 0 100-2.102 1.051 1.051 0 000 2.102zM213.333 179.401a1.068 1.068 0 100-2.136 1.068 1.068 0 000 2.136zM219.167 179.417a1.083 1.083 0 100-2.167 1.083 1.083 0 000 2.167zM225 179.45a1.117 1.117 0 10-.001-2.233 1.117 1.117 0 00.001 2.233zM230.833 179.466a1.133 1.133 0 100-2.267 1.133 1.133 0 000 2.267zM236.667 179.482a1.148 1.148 0 100-2.296 1.148 1.148 0 000 2.296zM242.5 179.498a1.164 1.164 0 10.002-2.328 1.164 1.164 0 00-.002 2.328zM248.333 179.514a1.182 1.182 0 000-2.362 1.182 1.182 0 000 2.362zM254.167 179.546a1.213 1.213 0 100-2.426 1.213 1.213 0 000 2.426zM260 179.563a1.23 1.23 0 10-.002-2.46 1.23 1.23 0 00.002 2.46zM265.833 179.579a1.246 1.246 0 100-2.492 1.246 1.246 0 000 2.492zM271.667 179.595a1.263 1.263 0 10-.001-2.525 1.263 1.263 0 00.001 2.525zM277.5 179.611a1.278 1.278 0 100-2.556 1.278 1.278 0 000 2.556zM283.333 179.627a1.294 1.294 0 100-2.587 1.294 1.294 0 000 2.587zM289.167 179.66a1.327 1.327 0 10-.001-2.653 1.327 1.327 0 00.001 2.653zM160.833 185.072a.906.906 0 100-1.811.906.906 0 000 1.811zM166.667 185.089a.922.922 0 100-1.845.922.922 0 000 1.845zM172.5 185.121a.955.955 0 100-1.91.955.955 0 000 1.91zM178.333 185.137a.97.97 0 10.001-1.941.97.97 0 00-.001 1.941zM184.167 185.153a.987.987 0 10-.001-1.973.987.987 0 00.001 1.973zM190 185.169a1.002 1.002 0 10.002-2.004 1.002 1.002 0 00-.002 2.004zM195.833 185.202a1.036 1.036 0 100-2.072 1.036 1.036 0 000 2.072zM201.667 185.218a1.052 1.052 0 10-.001-2.103 1.052 1.052 0 00.001 2.103zM207.5 185.234a1.067 1.067 0 100-2.135 1.067 1.067 0 000 2.135zM213.333 185.25a1.083 1.083 0 10.001-2.167 1.083 1.083 0 00-.001 2.167zM219.167 185.283a1.116 1.116 0 100-2.233 1.116 1.116 0 000 2.233zM225 185.299a1.132 1.132 0 100-2.264 1.132 1.132 0 000 2.264zM230.833 185.315a1.147 1.147 0 100-2.297 1.148 1.148 0 000 2.297zM236.667 185.332a1.165 1.165 0 10-.001-2.33 1.165 1.165 0 00.001 2.33zM242.5 185.348a1.181 1.181 0 100-2.363 1.181 1.181 0 000 2.363zM248.333 185.38a1.214 1.214 0 100-2.428 1.214 1.214 0 000 2.428zM254.167 185.396a1.229 1.229 0 100-2.457 1.229 1.229 0 000 2.457zM260 185.412a1.246 1.246 0 10-.002-2.492 1.246 1.246 0 00.002 2.492zM265.833 185.428a1.262 1.262 0 100-2.524 1.262 1.262 0 000 2.524zM271.667 185.444a1.277 1.277 0 100-2.553 1.277 1.277 0 000 2.553zM277.5 185.461a1.294 1.294 0 100-2.588 1.294 1.294 0 000 2.588zM283.333 185.493a1.327 1.327 0 100-2.655 1.327 1.327 0 000 2.655zM289.167 185.509a1.342 1.342 0 100-2.684 1.342 1.342 0 000 2.684zM160.833 190.922a.922.922 0 100-1.845.922.922 0 000 1.845zM166.667 190.955a.955.955 0 10-.001-1.91.955.955 0 00.001 1.91zM172.5 190.971a.971.971 0 100-1.943.971.971 0 000 1.943zM178.333 190.987a.987.987 0 100-1.974.987.987 0 000 1.974zM184.167 191.003a1.002 1.002 0 100-2.004 1.002 1.002 0 000 2.004zM190 191.035a1.035 1.035 0 10.001-2.069 1.035 1.035 0 00-.001 2.069zM195.833 191.051a1.051 1.051 0 10.002-2.102 1.051 1.051 0 00-.002 2.102zM201.667 191.067a1.067 1.067 0 100-2.133 1.067 1.067 0 000 2.133zM207.5 191.084a1.084 1.084 0 100-2.167 1.084 1.084 0 000 2.167zM213.333 191.116a1.117 1.117 0 100-2.233 1.117 1.117 0 000 2.233zM219.167 191.132a1.132 1.132 0 100-2.264 1.132 1.132 0 000 2.264zM225 191.148a1.148 1.148 0 100-2.296 1.148 1.148 0 000 2.296zM230.833 191.165a1.165 1.165 0 100-2.33 1.165 1.165 0 000 2.33zM236.667 191.181a1.182 1.182 0 10-.002-2.364 1.182 1.182 0 00.002 2.364zM242.5 191.213a1.213 1.213 0 100-2.426 1.213 1.213 0 000 2.426zM248.333 191.229a1.229 1.229 0 10.002-2.458 1.229 1.229 0 00-.002 2.458zM254.167 191.246a1.246 1.246 0 10-.002-2.492 1.246 1.246 0 00.002 2.492zM260 191.262a1.263 1.263 0 10-.001-2.525 1.263 1.263 0 00.001 2.525zM265.833 191.278a1.278 1.278 0 100-2.556 1.278 1.278 0 000 2.556zM271.667 191.294a1.294 1.294 0 100-2.587 1.294 1.294 0 000 2.587zM277.5 191.326a1.326 1.326 0 100-2.653 1.326 1.326 0 000 2.653zM283.333 191.343a1.343 1.343 0 100-2.685 1.343 1.343 0 000 2.685zM289.167 191.359a1.359 1.359 0 10-.002-2.718 1.359 1.359 0 00.002 2.718zM160.833 196.788a.956.956 0 10-.001-1.911.956.956 0 00.001 1.911zM166.667 196.804a.97.97 0 10-.001-1.941.97.97 0 00.001 1.941zM172.5 196.82a.987.987 0 100-1.974.987.987 0 000 1.974zM178.333 196.836a1.003 1.003 0 100-2.006 1.003 1.003 0 000 2.006zM184.167 196.869a1.036 1.036 0 10-.002-2.072 1.036 1.036 0 00.002 2.072zM190 196.885a1.051 1.051 0 100-2.102 1.051 1.051 0 000 2.102zM195.833 196.901a1.068 1.068 0 100-2.136 1.068 1.068 0 000 2.136zM201.667 196.917a1.083 1.083 0 100-2.167 1.083 1.083 0 000 2.167zM207.5 196.95a1.117 1.117 0 10-.001-2.233 1.117 1.117 0 00.001 2.233zM213.333 196.966a1.133 1.133 0 100-2.264 1.133 1.133 0 000 2.264zM219.167 196.982a1.148 1.148 0 100-2.296 1.148 1.148 0 000 2.296zM225 196.998a1.165 1.165 0 100-2.33 1.165 1.165 0 000 2.33zM230.833 197.014a1.182 1.182 0 000-2.362 1.182 1.182 0 000 2.362zM236.667 197.046a1.213 1.213 0 100-2.426 1.213 1.213 0 000 2.426zM242.5 197.063a1.23 1.23 0 10-.001-2.46 1.23 1.23 0 00.001 2.46zM248.333 197.079a1.246 1.246 0 100-2.492 1.246 1.246 0 000 2.492zM254.167 197.095a1.263 1.263 0 10-.001-2.525 1.263 1.263 0 00.001 2.525zM260 197.111a1.278 1.278 0 100-2.556 1.278 1.278 0 000 2.556zM265.833 197.127a1.294 1.294 0 100-2.587 1.294 1.294 0 000 2.587zM271.667 197.16a1.327 1.327 0 10-.001-2.653 1.327 1.327 0 00.001 2.653zM277.5 197.176a1.343 1.343 0 100-2.687 1.343 1.343 0 000 2.687zM283.333 197.192a1.358 1.358 0 10.001-2.717 1.358 1.358 0 00-.001 2.717zM289.167 197.208a1.375 1.375 0 100-2.75 1.375 1.375 0 000 2.75zM160.833 202.637a.97.97 0 10.001-1.941.97.97 0 00-.001 1.941zM166.667 202.653a.987.987 0 10-.001-1.973.987.987 0 00.001 1.973zM172.5 202.669a1.002 1.002 0 10.002-2.004 1.002 1.002 0 00-.002 2.004zM178.333 202.702a1.036 1.036 0 100-2.072 1.036 1.036 0 000 2.072zM184.167 202.718a1.052 1.052 0 10-.001-2.103 1.052 1.052 0 00.001 2.103zM190 202.734a1.067 1.067 0 100-2.135 1.067 1.067 0 000 2.135zM195.833 202.75a1.083 1.083 0 10.001-2.167 1.083 1.083 0 00-.001 2.167zM201.667 202.783a1.116 1.116 0 100-2.233 1.116 1.116 0 000 2.233zM207.5 202.799a1.132 1.132 0 100-2.264 1.132 1.132 0 000 2.264zM213.333 202.815a1.148 1.148 0 10.002-2.296 1.148 1.148 0 00-.002 2.296zM219.167 202.832a1.165 1.165 0 10-.001-2.33 1.165 1.165 0 00.001 2.33zM225 202.848a1.181 1.181 0 100-2.363 1.181 1.181 0 000 2.363zM230.833 202.88a1.214 1.214 0 100-2.428 1.214 1.214 0 000 2.428zM236.667 202.896a1.229 1.229 0 100-2.457 1.229 1.229 0 000 2.457zM242.5 202.912a1.245 1.245 0 100-2.49 1.245 1.245 0 000 2.49zM248.333 202.928a1.262 1.262 0 100-2.524 1.262 1.262 0 000 2.524zM254.167 202.944a1.277 1.277 0 100-2.553 1.277 1.277 0 000 2.553zM260 202.961a1.294 1.294 0 100-2.588 1.294 1.294 0 000 2.588zM265.833 202.993a1.327 1.327 0 100-2.655 1.327 1.327 0 000 2.655zM271.667 203.009a1.342 1.342 0 100-2.684 1.342 1.342 0 000 2.684zM277.5 203.025a1.358 1.358 0 100-2.716 1.358 1.358 0 000 2.716zM283.333 203.042a1.375 1.375 0 100-2.75 1.375 1.375 0 000 2.75zM289.167 203.058a1.391 1.391 0 100-2.783 1.391 1.391 0 000 2.783zM160.833 208.487a.987.987 0 100-1.974.987.987 0 000 1.974zM166.667 208.503a1.002 1.002 0 100-2.004 1.002 1.002 0 000 2.004zM172.5 208.535a1.035 1.035 0 10.001-2.069 1.035 1.035 0 00-.001 2.069zM178.333 208.551a1.051 1.051 0 10.002-2.102 1.051 1.051 0 00-.002 2.102zM184.167 208.567a1.067 1.067 0 100-2.133 1.067 1.067 0 000 2.133zM190 208.584a1.084 1.084 0 100-2.167 1.084 1.084 0 000 2.167zM195.833 208.616a1.117 1.117 0 100-2.233 1.117 1.117 0 000 2.233zM201.667 208.632a1.132 1.132 0 100-2.264 1.132 1.132 0 000 2.264zM207.5 208.648a1.148 1.148 0 100-2.296 1.148 1.148 0 000 2.296zM213.333 208.665a1.165 1.165 0 100-2.33 1.165 1.165 0 000 2.33zM219.167 208.681a1.181 1.181 0 100-2.363 1.181 1.181 0 000 2.363zM225 208.713a1.213 1.213 0 100-2.426 1.213 1.213 0 000 2.426zM230.833 208.729a1.229 1.229 0 10.002-2.458 1.229 1.229 0 00-.002 2.458zM236.667 208.746a1.246 1.246 0 10-.002-2.492 1.246 1.246 0 00.002 2.492zM242.5 208.762a1.262 1.262 0 100-2.524 1.262 1.262 0 000 2.524zM248.333 208.778a1.278 1.278 0 100-2.556 1.278 1.278 0 000 2.556zM254.167 208.794a1.294 1.294 0 100-2.587 1.294 1.294 0 000 2.587zM260 208.826a1.326 1.326 0 10-.001-2.651 1.326 1.326 0 00.001 2.651zM265.833 208.843a1.343 1.343 0 100-2.685 1.343 1.343 0 000 2.685zM271.667 208.859a1.359 1.359 0 10-.002-2.718 1.359 1.359 0 00.002 2.718zM277.5 208.875a1.375 1.375 0 100-2.75 1.375 1.375 0 000 2.75zM283.333 208.891a1.392 1.392 0 10.001-2.783 1.392 1.392 0 00-.001 2.783zM289.167 208.907a1.407 1.407 0 100-2.814 1.407 1.407 0 000 2.814zM160.833 214.336a1.003 1.003 0 100-2.006 1.003 1.003 0 000 2.006zM166.667 214.369a1.036 1.036 0 10-.002-2.072 1.036 1.036 0 00.002 2.072zM172.5 214.385a1.051 1.051 0 100-2.102 1.051 1.051 0 000 2.102zM178.333 214.401a1.068 1.068 0 100-2.136 1.068 1.068 0 000 2.136zM184.167 214.417a1.083 1.083 0 100-2.167 1.083 1.083 0 000 2.167zM190 214.45a1.117 1.117 0 10-.001-2.233 1.117 1.117 0 00.001 2.233zM195.833 214.466a1.133 1.133 0 100-2.264 1.133 1.133 0 000 2.264zM201.667 214.482a1.148 1.148 0 100-2.296 1.148 1.148 0 000 2.296zM207.5 214.498a1.165 1.165 0 100-2.33 1.165 1.165 0 000 2.33zM213.333 214.514a1.181 1.181 0 100-2.363 1.181 1.181 0 000 2.363zM219.167 214.546a1.213 1.213 0 100-2.426 1.213 1.213 0 000 2.426zM225 214.563a1.23 1.23 0 10-.001-2.46 1.23 1.23 0 00.001 2.46zM230.833 214.579a1.246 1.246 0 100-2.492 1.246 1.246 0 000 2.492zM236.667 214.595a1.263 1.263 0 10-.001-2.525 1.263 1.263 0 00.001 2.525zM242.5 214.611a1.278 1.278 0 100-2.556 1.278 1.278 0 000 2.556zM248.333 214.627a1.294 1.294 0 100-2.587 1.294 1.294 0 000 2.587zM254.167 214.66a1.327 1.327 0 10-.001-2.653 1.327 1.327 0 00.001 2.653zM260 214.676a1.342 1.342 0 100-2.685 1.342 1.342 0 000 2.685zM265.833 214.692a1.358 1.358 0 10.001-2.717 1.358 1.358 0 00-.001 2.717zM271.667 214.708a1.375 1.375 0 100-2.75 1.375 1.375 0 000 2.75zM277.5 214.725a1.39 1.39 0 100-2.782 1.39 1.39 0 000 2.782zM283.333 214.741a1.407 1.407 0 100-2.815 1.407 1.407 0 000 2.815zM289.167 214.757a1.423 1.423 0 100-2.846 1.423 1.423 0 000 2.846zM160.833 220.202a1.036 1.036 0 100-2.072 1.036 1.036 0 000 2.072zM166.667 220.218a1.052 1.052 0 10-.001-2.103 1.052 1.052 0 00.001 2.103zM172.5 220.234a1.067 1.067 0 100-2.135 1.067 1.067 0 000 2.135zM178.333 220.25a1.083 1.083 0 10.001-2.167 1.083 1.083 0 00-.001 2.167zM184.167 220.283a1.116 1.116 0 100-2.233 1.116 1.116 0 000 2.233zM190 220.299a1.132 1.132 0 100-2.264 1.132 1.132 0 000 2.264zM195.833 220.315a1.148 1.148 0 10.002-2.296 1.148 1.148 0 00-.002 2.296zM201.667 220.332a1.165 1.165 0 10-.001-2.33 1.165 1.165 0 00.001 2.33zM207.5 220.348a1.181 1.181 0 100-2.363 1.181 1.181 0 000 2.363zM213.333 220.38a1.213 1.213 0 100-2.426 1.213 1.213 0 000 2.426zM219.167 220.396a1.229 1.229 0 100-2.457 1.229 1.229 0 000 2.457zM225 220.412a1.245 1.245 0 100-2.49 1.245 1.245 0 000 2.49zM230.833 220.428a1.262 1.262 0 100-2.524 1.262 1.262 0 000 2.524zM236.667 220.444a1.277 1.277 0 100-2.553 1.277 1.277 0 000 2.553zM242.5 220.461a1.294 1.294 0 100-2.588 1.294 1.294 0 000 2.588zM248.333 220.493a1.327 1.327 0 100-2.655 1.327 1.327 0 000 2.655zM254.167 220.509a1.342 1.342 0 100-2.684 1.342 1.342 0 000 2.684zM260 220.525a1.358 1.358 0 100-2.716 1.358 1.358 0 000 2.716zM265.833 220.542a1.375 1.375 0 100-2.75 1.375 1.375 0 000 2.75zM271.667 220.558a1.391 1.391 0 100-2.783 1.391 1.391 0 000 2.783zM277.5 220.574a1.407 1.407 0 100-2.814 1.407 1.407 0 000 2.814zM283.333 220.59a1.424 1.424 0 100-2.847 1.424 1.424 0 000 2.847zM289.167 220.606a1.439 1.439 0 100-2.877 1.439 1.439 0 000 2.877zM160.833 226.052a1.052 1.052 0 100-2.104 1.052 1.052 0 000 2.104zM166.667 226.067a1.067 1.067 0 100-2.133 1.067 1.067 0 000 2.133zM172.5 226.084a1.084 1.084 0 100-2.167 1.084 1.084 0 000 2.167zM178.333 226.116a1.117 1.117 0 100-2.233 1.117 1.117 0 000 2.233zM184.167 226.132a1.132 1.132 0 100-2.264 1.132 1.132 0 000 2.264zM190 226.148a1.148 1.148 0 100-2.296 1.148 1.148 0 000 2.296zM195.833 226.165a1.165 1.165 0 100-2.33 1.165 1.165 0 000 2.33zM201.667 226.181a1.181 1.181 0 100-2.363 1.181 1.181 0 000 2.363zM207.5 226.213a1.213 1.213 0 100-2.426 1.213 1.213 0 000 2.426zM213.333 226.229a1.23 1.23 0 100-2.46 1.23 1.23 0 000 2.46zM219.167 226.245a1.245 1.245 0 100-2.49 1.245 1.245 0 000 2.49zM225 226.262a1.262 1.262 0 100-2.524 1.262 1.262 0 000 2.524zM230.833 226.278a1.278 1.278 0 100-2.556 1.278 1.278 0 000 2.556zM236.667 226.294a1.294 1.294 0 100-2.587 1.294 1.294 0 000 2.587zM242.5 226.326a1.326 1.326 0 100-2.653 1.326 1.326 0 000 2.653zM248.333 226.343a1.343 1.343 0 100-2.685 1.343 1.343 0 000 2.685zM254.167 226.358a1.358 1.358 0 100-2.716 1.358 1.358 0 000 2.716zM260 226.375a1.375 1.375 0 100-2.75 1.375 1.375 0 000 2.75zM265.833 226.391a1.392 1.392 0 10.001-2.783 1.392 1.392 0 00-.001 2.783zM271.667 226.407a1.407 1.407 0 100-2.814 1.407 1.407 0 000 2.814zM277.5 226.424a1.425 1.425 0 10-.001-2.85 1.425 1.425 0 00.001 2.85zM283.333 226.439a1.44 1.44 0 10.001-2.879 1.44 1.44 0 00-.001 2.879zM289.167 226.456a1.455 1.455 0 100-2.91 1.455 1.455 0 000 2.91zM160.833 231.901a1.068 1.068 0 100-2.136 1.068 1.068 0 000 2.136zM166.667 231.917a1.083 1.083 0 100-2.167 1.083 1.083 0 000 2.167zM172.5 231.949a1.116 1.116 0 100-2.233 1.116 1.116 0 000 2.233zM178.333 231.966a1.133 1.133 0 100-2.267 1.133 1.133 0 000 2.267zM184.167 231.981a1.147 1.147 0 100-2.296 1.148 1.148 0 100 2.296zM190 231.998a1.165 1.165 0 100-2.33 1.165 1.165 0 000 2.33zM195.833 232.015a1.182 1.182 0 000-2.363 1.182 1.182 0 000 2.363zM201.667 232.047a1.214 1.214 0 10-.002-2.428 1.214 1.214 0 00.002 2.428zM207.5 232.063a1.229 1.229 0 100-2.458 1.229 1.229 0 000 2.458zM213.333 232.079a1.246 1.246 0 100-2.492 1.246 1.246 0 000 2.492zM219.167 232.095a1.262 1.262 0 10-.002-2.524 1.262 1.262 0 00.002 2.524zM225 232.111a1.278 1.278 0 100-2.556 1.278 1.278 0 000 2.556zM230.833 232.127a1.294 1.294 0 100-2.587 1.294 1.294 0 000 2.587zM236.667 232.16a1.327 1.327 0 10-.003-2.655 1.327 1.327 0 00.003 2.655zM242.5 232.176a1.343 1.343 0 100-2.687 1.343 1.343 0 000 2.687zM248.333 232.192a1.358 1.358 0 10.001-2.717 1.358 1.358 0 00-.001 2.717zM254.167 232.208a1.375 1.375 0 100-2.75 1.375 1.375 0 000 2.75zM260 232.225a1.39 1.39 0 001.39-1.392 1.39 1.39 0 10-2.781 0 1.39 1.39 0 001.391 1.392zM265.833 232.24a1.407 1.407 0 100-2.814 1.407 1.407 0 000 2.814zM271.667 232.257a1.424 1.424 0 10-.001-2.847 1.424 1.424 0 00.001 2.847zM277.5 232.273a1.44 1.44 0 10-.001-2.879 1.44 1.44 0 00.001 2.879zM283.333 232.289a1.455 1.455 0 10.002-2.91 1.455 1.455 0 00-.002 2.91zM289.167 232.306a1.473 1.473 0 000-2.945 1.473 1.473 0 000 2.945zM160.833 237.75a1.083 1.083 0 10.003-2.165 1.083 1.083 0 00-.003 2.165zM166.667 237.783a1.116 1.116 0 100-2.233 1.116 1.116 0 000 2.233zM172.5 237.799a1.132 1.132 0 100-2.264 1.132 1.132 0 000 2.264zM178.333 237.815a1.148 1.148 0 10.002-2.296 1.148 1.148 0 00-.002 2.296zM184.167 237.831a1.164 1.164 0 100-2.328 1.164 1.164 0 000 2.328zM190 237.848a1.182 1.182 0 10-.002-2.364 1.182 1.182 0 00.002 2.364zM195.833 237.88a1.213 1.213 0 100-2.426 1.213 1.213 0 000 2.426zM201.667 237.896a1.229 1.229 0 100-2.457 1.229 1.229 0 000 2.457zM207.5 237.912a1.246 1.246 0 100-2.492 1.246 1.246 0 000 2.492zM213.333 237.929a1.263 1.263 0 10-.001-2.525 1.263 1.263 0 00.001 2.525zM219.167 237.944a1.277 1.277 0 100-2.553 1.277 1.277 0 000 2.553zM225 237.961a1.294 1.294 0 100-2.587 1.294 1.294 0 000 2.587zM230.833 237.993a1.327 1.327 0 100-2.655 1.327 1.327 0 000 2.655zM236.667 238.009a1.342 1.342 0 100-2.684 1.342 1.342 0 000 2.684zM242.5 238.025a1.358 1.358 0 100-2.716 1.358 1.358 0 000 2.716zM248.333 238.042a1.375 1.375 0 100-2.75 1.375 1.375 0 000 2.75zM254.167 238.058a1.391 1.391 0 100-2.783 1.391 1.391 0 000 2.783zM260 238.074a1.407 1.407 0 100-2.814 1.407 1.407 0 000 2.814zM265.833 238.09a1.424 1.424 0 100-2.847 1.424 1.424 0 000 2.847zM271.667 238.106a1.439 1.439 0 100-2.877 1.439 1.439 0 000 2.877zM277.5 238.122a1.455 1.455 0 10.001-2.91 1.455 1.455 0 00-.001 2.91zM283.333 238.139a1.473 1.473 0 000-2.945 1.473 1.473 0 000 2.945zM289.167 238.155a1.489 1.489 0 10-.002-2.978 1.489 1.489 0 00.002 2.978zM160.833 243.616a1.117 1.117 0 100-2.233 1.117 1.117 0 000 2.233zM166.667 243.632a1.132 1.132 0 100-2.264 1.132 1.132 0 000 2.264zM172.5 243.648a1.147 1.147 0 10.001-2.295 1.147 1.147 0 00-.001 2.295zM178.333 243.665a1.164 1.164 0 10.002-2.328 1.164 1.164 0 00-.002 2.328zM184.167 243.681a1.181 1.181 0 100-2.363 1.181 1.181 0 000 2.363zM190 243.713a1.213 1.213 0 100-2.426 1.213 1.213 0 000 2.426zM195.833 243.729a1.23 1.23 0 100-2.46 1.23 1.23 0 000 2.46zM201.667 243.745a1.245 1.245 0 100-2.49 1.245 1.245 0 000 2.49zM207.5 243.762a1.262 1.262 0 100-2.524 1.262 1.262 0 000 2.524zM213.333 243.778a1.278 1.278 0 100-2.556 1.278 1.278 0 000 2.556zM219.167 243.794a1.294 1.294 0 100-2.588 1.294 1.294 0 000 2.588zM225 243.826a1.326 1.326 0 100-2.653 1.326 1.326 0 000 2.653zM230.833 243.843a1.343 1.343 0 100-2.687 1.343 1.343 0 000 2.687zM236.667 243.858a1.358 1.358 0 100-2.716 1.358 1.358 0 000 2.716zM242.5 243.875a1.374 1.374 0 10.002-2.748 1.374 1.374 0 00-.002 2.748zM248.333 243.891a1.39 1.39 0 10.002-2.782 1.39 1.39 0 00-.002 2.782zM254.167 243.907a1.407 1.407 0 100-2.814 1.407 1.407 0 000 2.814zM260 243.924a1.425 1.425 0 10-.001-2.85 1.425 1.425 0 00.001 2.85zM265.833 243.939a1.44 1.44 0 10.001-2.879 1.44 1.44 0 00-.001 2.879zM271.667 243.956a1.455 1.455 0 100-2.91 1.455 1.455 0 000 2.91zM277.5 243.972a1.472 1.472 0 100-2.944 1.472 1.472 0 000 2.944zM283.333 243.988a1.488 1.488 0 100-2.975 1.488 1.488 0 000 2.975zM289.167 244.004a1.504 1.504 0 100-3.008 1.504 1.504 0 000 3.008zM160.833 249.466a1.133 1.133 0 100-2.267 1.133 1.133 0 000 2.267zM166.667 249.481a1.147 1.147 0 100-2.296 1.148 1.148 0 100 2.296zM172.5 249.498a1.165 1.165 0 100-2.33 1.165 1.165 0 000 2.33zM178.333 249.515a1.182 1.182 0 000-2.363 1.182 1.182 0 000 2.363zM184.167 249.547a1.214 1.214 0 10-.002-2.428 1.214 1.214 0 00.002 2.428zM190 249.563a1.229 1.229 0 100-2.458 1.229 1.229 0 000 2.458zM195.833 249.579a1.246 1.246 0 100-2.492 1.246 1.246 0 000 2.492zM201.667 249.595a1.262 1.262 0 10-.002-2.524 1.262 1.262 0 00.002 2.524zM207.5 249.611a1.278 1.278 0 100-2.556 1.278 1.278 0 000 2.556zM213.333 249.627a1.294 1.294 0 100-2.587 1.294 1.294 0 000 2.587zM219.167 249.66a1.327 1.327 0 10-.003-2.655 1.327 1.327 0 00.003 2.655zM225 249.676a1.343 1.343 0 100-2.685 1.343 1.343 0 000 2.685zM230.833 249.692a1.358 1.358 0 10.001-2.717 1.358 1.358 0 00-.001 2.717zM236.667 249.708a1.375 1.375 0 100-2.75 1.375 1.375 0 000 2.75zM242.5 249.725a1.39 1.39 0 100-2.782 1.39 1.39 0 000 2.782zM248.333 249.74a1.407 1.407 0 100-2.814 1.407 1.407 0 000 2.814zM254.167 249.757a1.424 1.424 0 10-.001-2.847 1.424 1.424 0 00.001 2.847zM260 249.773a1.44 1.44 0 10-.001-2.879 1.44 1.44 0 00.001 2.879zM265.833 249.789a1.455 1.455 0 10.002-2.91 1.455 1.455 0 00-.002 2.91zM271.667 249.806a1.473 1.473 0 000-2.945 1.473 1.473 0 000 2.945zM277.5 249.821a1.488 1.488 0 100-2.975 1.488 1.488 0 000 2.975zM283.333 249.838a1.505 1.505 0 100-3.01 1.505 1.505 0 000 3.01zM289.167 249.854a1.521 1.521 0 100-3.042 1.521 1.521 0 000 3.042zM160.833 255.315a1.148 1.148 0 10.002-2.296 1.148 1.148 0 00-.002 2.296zM166.667 255.331a1.164 1.164 0 100-2.328 1.164 1.164 0 000 2.328zM172.5 255.348a1.182 1.182 0 10-.002-2.364 1.182 1.182 0 00.002 2.364zM178.333 255.38a1.213 1.213 0 100-2.426 1.213 1.213 0 000 2.426zM184.167 255.396a1.229 1.229 0 100-2.457 1.229 1.229 0 000 2.457zM190 255.412a1.246 1.246 0 100-2.492 1.246 1.246 0 000 2.492zM195.833 255.429a1.263 1.263 0 10-.001-2.525 1.263 1.263 0 00.001 2.525zM201.667 255.444a1.277 1.277 0 100-2.553 1.277 1.277 0 000 2.553zM207.5 255.461a1.294 1.294 0 100-2.587 1.294 1.294 0 000 2.587zM213.333 255.493a1.327 1.327 0 100-2.653 1.327 1.327 0 000 2.653zM219.167 255.509a1.342 1.342 0 100-2.684 1.342 1.342 0 000 2.684zM225 255.525a1.358 1.358 0 100-2.716 1.358 1.358 0 000 2.716zM230.833 255.542a1.375 1.375 0 100-2.75 1.375 1.375 0 000 2.75zM236.667 255.558a1.391 1.391 0 100-2.783 1.391 1.391 0 000 2.783zM242.5 255.574a1.407 1.407 0 100-2.814 1.407 1.407 0 000 2.814zM248.333 255.59a1.424 1.424 0 100-2.847 1.424 1.424 0 000 2.847zM254.167 255.606a1.439 1.439 0 100-2.877 1.439 1.439 0 000 2.877zM260 255.622a1.456 1.456 0 100-2.912 1.456 1.456 0 000 2.912zM265.833 255.639a1.473 1.473 0 000-2.945 1.473 1.473 0 000 2.945zM271.667 255.655a1.489 1.489 0 10-.002-2.978 1.489 1.489 0 00.002 2.978zM277.5 255.671a1.504 1.504 0 100-3.008 1.504 1.504 0 000 3.008zM283.333 255.688a1.521 1.521 0 100-3.042 1.521 1.521 0 000 3.042zM289.167 255.703a1.536 1.536 0 100-3.074 1.536 1.536 0 000 3.074zM160.833 261.166a1.164 1.164 0 10.001-2.329 1.164 1.164 0 00-.001 2.329zM166.667 261.181a1.18 1.18 0 100-2.361 1.18 1.18 0 000 2.361zM172.5 261.214a1.213 1.213 0 100-2.426 1.213 1.213 0 000 2.426zM178.333 261.229a1.23 1.23 0 100-2.46 1.23 1.23 0 000 2.46zM184.167 261.245a1.245 1.245 0 100-2.49 1.245 1.245 0 000 2.49zM190 261.262a1.262 1.262 0 100-2.524 1.262 1.262 0 000 2.524zM195.833 261.279a1.279 1.279 0 10-.001-2.557 1.279 1.279 0 00.001 2.557zM201.667 261.294a1.294 1.294 0 100-2.588 1.294 1.294 0 000 2.588zM207.5 261.326a1.326 1.326 0 100-2.653 1.326 1.326 0 000 2.653zM213.333 261.343a1.343 1.343 0 100-2.687 1.343 1.343 0 000 2.687zM219.167 261.358a1.358 1.358 0 100-2.716 1.358 1.358 0 000 2.716zM225 261.375a1.374 1.374 0 10.002-2.748 1.374 1.374 0 00-.002 2.748zM230.833 261.391a1.39 1.39 0 100-2.781 1.39 1.39 0 100 2.781zM236.667 261.408a1.407 1.407 0 100-2.815 1.407 1.407 0 000 2.815zM242.5 261.425a1.425 1.425 0 10-.002-2.85 1.425 1.425 0 00.002 2.85zM248.333 261.439a1.439 1.439 0 10.002-2.878 1.439 1.439 0 00-.002 2.878zM254.167 261.456a1.455 1.455 0 100-2.91 1.455 1.455 0 000 2.91zM260 261.472a1.472 1.472 0 10-.001-2.943 1.472 1.472 0 00.001 2.943zM265.833 261.488a1.488 1.488 0 100-2.975 1.488 1.488 0 000 2.975zM271.667 261.504a1.504 1.504 0 100-3.008 1.504 1.504 0 000 3.008zM277.5 261.521a1.521 1.521 0 100-3.042 1.521 1.521 0 000 3.042zM283.333 261.537a1.537 1.537 0 100-3.074 1.537 1.537 0 000 3.074zM289.167 261.554a1.555 1.555 0 000-3.107 1.553 1.553 0 000 3.107zM160.833 267.015a1.182 1.182 0 000-2.363 1.182 1.182 0 000 2.363zM166.667 267.047a1.214 1.214 0 10-.002-2.428 1.214 1.214 0 00.002 2.428zM172.5 267.063a1.229 1.229 0 100-2.458 1.229 1.229 0 000 2.458zM178.333 267.079a1.246 1.246 0 100-2.492 1.246 1.246 0 000 2.492zM184.167 267.095a1.262 1.262 0 10-.002-2.524 1.262 1.262 0 00.002 2.524zM190 267.111a1.278 1.278 0 100-2.556 1.278 1.278 0 000 2.556zM195.833 267.127a1.294 1.294 0 100-2.587 1.294 1.294 0 000 2.587zM201.667 267.16a1.327 1.327 0 10-.003-2.655 1.327 1.327 0 00.003 2.655zM207.5 267.176a1.343 1.343 0 100-2.685 1.343 1.343 0 000 2.685zM213.333 267.192a1.358 1.358 0 10.001-2.717 1.358 1.358 0 00-.001 2.717zM219.167 267.208a1.375 1.375 0 100-2.75 1.375 1.375 0 000 2.75zM225 267.225a1.392 1.392 0 10-.001-2.783 1.392 1.392 0 00.001 2.783zM230.833 267.24a1.407 1.407 0 100-2.814 1.407 1.407 0 000 2.814zM236.667 267.257a1.424 1.424 0 10-.001-2.847 1.424 1.424 0 00.001 2.847zM242.5 267.273a1.44 1.44 0 10-.001-2.879 1.44 1.44 0 00.001 2.879zM248.333 267.289a1.455 1.455 0 10.002-2.91 1.455 1.455 0 00-.002 2.91zM254.167 267.306a1.473 1.473 0 000-2.945 1.473 1.473 0 000 2.945zM260 267.321a1.488 1.488 0 100-2.977 1.488 1.488 0 000 2.977zM265.833 267.338a1.505 1.505 0 100-3.01 1.505 1.505 0 000 3.01zM271.667 267.354a1.521 1.521 0 100-3.042 1.521 1.521 0 000 3.042zM277.5 267.37a1.537 1.537 0 100-3.074 1.537 1.537 0 000 3.074zM283.333 267.386a1.553 1.553 0 100-3.105 1.553 1.553 0 000 3.105zM289.167 267.402a1.568 1.568 0 100-3.136 1.568 1.568 0 000 3.136zM160.833 272.88a1.213 1.213 0 100-2.426 1.213 1.213 0 000 2.426zM166.667 272.896a1.229 1.229 0 100-2.457 1.229 1.229 0 000 2.457zM172.5 272.912a1.246 1.246 0 100-2.492 1.246 1.246 0 000 2.492zM178.333 272.929a1.263 1.263 0 10-.001-2.525 1.263 1.263 0 00.001 2.525zM184.167 272.944a1.277 1.277 0 100-2.553 1.277 1.277 0 000 2.553zM190 272.961a1.294 1.294 0 100-2.587 1.294 1.294 0 000 2.587zM195.833 272.993a1.327 1.327 0 100-2.653 1.327 1.327 0 000 2.653zM201.667 273.009a1.342 1.342 0 100-2.684 1.342 1.342 0 000 2.684zM207.5 273.025a1.359 1.359 0 100-2.718 1.359 1.359 0 000 2.718zM213.333 273.042a1.375 1.375 0 100-2.75 1.375 1.375 0 000 2.75zM219.167 273.058a1.391 1.391 0 100-2.783 1.391 1.391 0 000 2.783zM225 273.074a1.407 1.407 0 100-2.814 1.407 1.407 0 000 2.814zM230.833 273.09a1.424 1.424 0 100-2.847 1.424 1.424 0 000 2.847zM236.667 273.106a1.439 1.439 0 100-2.877 1.439 1.439 0 000 2.877zM242.5 273.122a1.455 1.455 0 10.001-2.91 1.455 1.455 0 00-.001 2.91zM248.333 273.139a1.473 1.473 0 000-2.945 1.473 1.473 0 000 2.945zM254.167 273.155a1.489 1.489 0 10-.002-2.978 1.489 1.489 0 00.002 2.978zM260 273.171a1.504 1.504 0 100-3.008 1.504 1.504 0 000 3.008zM265.833 273.188a1.521 1.521 0 100-3.042 1.521 1.521 0 000 3.042zM271.667 273.203a1.536 1.536 0 100-3.074 1.536 1.536 0 000 3.074zM277.5 273.22a1.554 1.554 0 10-.002-3.108 1.554 1.554 0 00.002 3.108zM283.333 273.235a1.568 1.568 0 10.002-3.136 1.568 1.568 0 00-.002 3.136zM289.167 273.252a1.585 1.585 0 10-.001-3.171 1.585 1.585 0 00.001 3.171zM160.833 278.729a1.23 1.23 0 100-2.46 1.23 1.23 0 000 2.46zM166.667 278.745a1.245 1.245 0 100-2.49 1.245 1.245 0 000 2.49zM172.5 278.762a1.262 1.262 0 100-2.524 1.262 1.262 0 000 2.524zM178.333 278.778a1.278 1.278 0 100-2.556 1.278 1.278 0 000 2.556zM184.167 278.794a1.294 1.294 0 100-2.588 1.294 1.294 0 000 2.588zM190 278.826a1.326 1.326 0 100-2.653 1.326 1.326 0 000 2.653zM195.833 278.843a1.343 1.343 0 100-2.687 1.343 1.343 0 000 2.687zM201.667 278.858a1.358 1.358 0 100-2.716 1.358 1.358 0 000 2.716zM207.5 278.875a1.375 1.375 0 100-2.75 1.375 1.375 0 000 2.75zM213.333 278.891a1.39 1.39 0 10.002-2.782 1.39 1.39 0 00-.002 2.782zM219.167 278.907a1.407 1.407 0 100-2.814 1.407 1.407 0 000 2.814zM225 278.924a1.425 1.425 0 10-.001-2.85 1.425 1.425 0 00.001 2.85zM230.833 278.939a1.44 1.44 0 10.001-2.879 1.44 1.44 0 00-.001 2.879zM236.667 278.956a1.455 1.455 0 100-2.91 1.455 1.455 0 000 2.91zM242.5 278.972a1.472 1.472 0 100-2.944 1.472 1.472 0 000 2.944zM248.333 278.988a1.488 1.488 0 100-2.975 1.488 1.488 0 000 2.975zM254.167 279.004a1.504 1.504 0 100-3.008 1.504 1.504 0 000 3.008zM260 279.021a1.521 1.521 0 100-3.042 1.521 1.521 0 000 3.042zM265.833 279.037a1.537 1.537 0 100-3.074 1.537 1.537 0 000 3.074zM271.667 279.053a1.554 1.554 0 10-.002-3.108 1.554 1.554 0 00.002 3.108zM277.5 279.069a1.57 1.57 0 10-.001-3.14 1.57 1.57 0 00.001 3.14zM283.333 279.085a1.585 1.585 0 10.002-3.17 1.585 1.585 0 00-.002 3.17zM289.167 279.102a1.602 1.602 0 100-3.205 1.602 1.602 0 000 3.205zM160.833 284.579a1.246 1.246 0 100-2.492 1.246 1.246 0 000 2.492zM166.667 284.595a1.262 1.262 0 10-.002-2.524 1.262 1.262 0 00.002 2.524zM172.5 284.611a1.278 1.278 0 100-2.556 1.278 1.278 0 000 2.556zM178.333 284.627a1.294 1.294 0 100-2.587 1.294 1.294 0 000 2.587zM184.167 284.66a1.327 1.327 0 10-.003-2.655 1.327 1.327 0 00.003 2.655zM190 284.676a1.343 1.343 0 100-2.685 1.343 1.343 0 000 2.685zM195.833 284.692a1.358 1.358 0 10.001-2.717 1.358 1.358 0 00-.001 2.717zM201.667 284.708a1.375 1.375 0 100-2.75 1.375 1.375 0 000 2.75zM207.5 284.725a1.392 1.392 0 10-.001-2.783 1.392 1.392 0 00.001 2.783zM213.333 284.74a1.408 1.408 0 100-2.816 1.408 1.408 0 000 2.816zM219.167 284.757a1.424 1.424 0 10-.001-2.847 1.424 1.424 0 00.001 2.847zM225 284.773a1.44 1.44 0 10-.001-2.879 1.44 1.44 0 00.001 2.879zM230.833 284.789a1.455 1.455 0 10.002-2.91 1.455 1.455 0 00-.002 2.91zM236.667 284.806a1.473 1.473 0 000-2.945 1.473 1.473 0 000 2.945zM242.5 284.821a1.488 1.488 0 100-2.975 1.488 1.488 0 000 2.975zM248.333 284.838a1.505 1.505 0 100-3.01 1.505 1.505 0 000 3.01zM254.167 284.854a1.521 1.521 0 100-3.042 1.521 1.521 0 000 3.042zM260 284.87a1.536 1.536 0 100-3.072 1.536 1.536 0 000 3.072zM265.833 284.886a1.553 1.553 0 100-3.105 1.553 1.553 0 000 3.105zM271.667 284.902a1.568 1.568 0 100-3.136 1.568 1.568 0 000 3.136zM277.5 284.919a1.585 1.585 0 100-3.17 1.585 1.585 0 000 3.17zM283.333 284.935a1.602 1.602 0 100-3.203 1.602 1.602 0 000 3.203zM289.167 284.951a1.617 1.617 0 100-3.235 1.617 1.617 0 000 3.235zM160.833 290.429a1.263 1.263 0 10-.001-2.525 1.263 1.263 0 00.001 2.525zM166.667 290.444a1.277 1.277 0 100-2.553 1.277 1.277 0 000 2.553zM172.5 290.461a1.294 1.294 0 100-2.587 1.294 1.294 0 000 2.587zM178.333 290.493a1.327 1.327 0 100-2.653 1.327 1.327 0 000 2.653zM184.167 290.509a1.342 1.342 0 100-2.684 1.342 1.342 0 000 2.684zM190 290.525a1.359 1.359 0 100-2.718 1.359 1.359 0 000 2.718zM195.833 290.542a1.375 1.375 0 100-2.75 1.375 1.375 0 000 2.75zM201.667 290.558a1.391 1.391 0 100-2.783 1.391 1.391 0 000 2.783zM207.5 290.574a1.407 1.407 0 100-2.814 1.407 1.407 0 000 2.814zM213.333 290.59a1.423 1.423 0 10.002-2.846 1.423 1.423 0 00-.002 2.846zM219.167 290.606a1.439 1.439 0 100-2.877 1.439 1.439 0 000 2.877zM225 290.622a1.455 1.455 0 10.001-2.91 1.455 1.455 0 00-.001 2.91zM230.833 290.639a1.473 1.473 0 000-2.945 1.473 1.473 0 000 2.945zM236.667 290.655a1.489 1.489 0 10-.002-2.978 1.489 1.489 0 00.002 2.978zM242.5 290.671a1.504 1.504 0 100-3.008 1.504 1.504 0 000 3.008zM248.333 290.688a1.521 1.521 0 100-3.042 1.521 1.521 0 000 3.042zM254.167 290.703a1.536 1.536 0 100-3.074 1.536 1.536 0 000 3.074zM260 290.72a1.554 1.554 0 10-.002-3.108 1.554 1.554 0 00.002 3.108zM265.833 290.735a1.568 1.568 0 10.002-3.136 1.568 1.568 0 00-.002 3.136zM271.667 290.752a1.585 1.585 0 10-.001-3.171 1.585 1.585 0 00.001 3.171zM277.5 290.769a1.602 1.602 0 100-3.205 1.602 1.602 0 000 3.205zM283.333 290.784a1.617 1.617 0 10.001-3.235 1.617 1.617 0 00-.001 3.235zM289.167 290.784a1.617 1.617 0 100-3.234 1.617 1.617 0 000 3.234zM242.5 296.521a1.521 1.521 0 100-3.042 1.521 1.521 0 000 3.042zM248.333 296.537a1.537 1.537 0 100-3.074 1.537 1.537 0 000 3.074zM254.167 296.553a1.554 1.554 0 10-.002-3.108 1.554 1.554 0 00.002 3.108zM260 296.569a1.57 1.57 0 10-.001-3.14 1.57 1.57 0 00.001 3.14zM265.833 296.585a1.585 1.585 0 10.002-3.17 1.585 1.585 0 00-.002 3.17zM271.667 296.602a1.602 1.602 0 100-3.205 1.602 1.602 0 000 3.205zM277.5 296.617c.894 0 1.617-.723 1.617-1.617s-.723-1.617-1.617-1.617-1.617.723-1.617 1.617.723 1.617 1.617 1.617zM283.333 296.617a1.617 1.617 0 10.003-3.233 1.617 1.617 0 00-.003 3.233zM289.167 296.634a1.635 1.635 0 10-.001-3.27 1.635 1.635 0 00.001 3.27z" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </StyledDiv>
  );
}

const MemoDots2 = React.memo(Dots2);
export default MemoDots2;