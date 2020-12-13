import React from "react";

const AKC: React.FC<{ size: number }> = ({ size = 80 }) => {
  return (
    <div style={{ width: size, height: size }}>
      <svg id="desktop-white-redesign" viewBox="0 0 70 69">
        <g fill="none" fillRule="evenodd">
          <g fill="#FFF" fillRule="nonzero">
            <path d="M21.855 27.05l-1.645 8.429a3.457 3.457 0 001.793 0c.105-2.81.056-5.625-.148-8.43z"></path>
            <path d="M55.988 29.297c-1.793-7.789-9.577-14.986-17.51-16.179a22.354 22.354 0 00-23.362 10.934c-3.893 6.438-3.735 16.021.157 22.163a22.306 22.306 0 007.331 7.641C29.502 58.5 40.42 58.5 47.16 53.561a22.298 22.298 0 008.828-24.264zM26.605 54.004l-2.799-3.44c-.906-.296-1.35 1.044-2.098.897l-.148-.296c.896-4.052.6-8.873.443-13.182-.443-.601-1.34-.148-2.089-.148l-.305.296c-.601 2.958-1.045 5.994-1.498 9.14a.325.325 0 01-.296-.306c-.295-1.193-.295-2.544-1.044-3.589-.601 0-1.655.296-1.803-.306.305-.897 1.35-1.794 1.645-2.839 3.144-6.29 4.346-13.487 5.242-20.704.601-.148.601.601.897.897h.306c.59-1.045.896-2.544 2.394-3.293.148.601-.305 1.193-.305 1.794l-.296 4.496-.148 12.433c.296 6.438 1.646 12.58 2.69 18.732l-.788-.582zm16.21.207a7.604 7.604 0 01-3.597-1.35c-.897.601-1.34 1.971-2.543 2.247.306-5.846.601-12.136-1.35-17.381a5.63 5.63 0 00-1.823-2.445c-.443-.148-1.044.148-1.044.601a24.494 24.494 0 00-.148 5.847l1.97 13.477c.133.332.183.69.149 1.045-1.646-.75-1.971-2.544-3.144-3.589h-.147c-.602.592-1.045 1.647-2.1 1.972l-.147-.148 1.35-14.079c0-7.039.601-14.68-1.793-20.97a21.7 21.7 0 01-.858-3.323 6.67 6.67 0 012.503 1.617l.601-.147 3.291-3.155h.296c-.148 2.247-.601 4.643-.897 6.901-.295 3.894-.896 7.789-.896 11.989.147.148.147.601.295.443 1.35-2.09 1.803-4.338 2.848-6.586a40.956 40.956 0 001.813-11.969c.897.158 1.054 1.055 1.645 1.805.193.51.5.968.897 1.34.601 0 1.054-.443 1.656-.591a13.266 13.266 0 012.394-.306 69.487 69.487 0 00-9.154 15.883l.148.296c4.385 4.644 3.596 11.535 6.286 16.928a18.154 18.154 0 001.804 3.293c-.158.148-.158.355-.306.355zm9.577-9.14a22.22 22.22 0 01-5.094 6.094c-.897-.306-1.045-1.203-1.498-1.804-4.04-7.631-3.745-18.575-.601-26.364a12.374 12.374 0 011.803-2.958c.762.336 1.395.91 1.803 1.637 1.35 1.647 1.97 3.589 2.838 5.54.305.149.305-.147.601-.147-.601 2.09-.897 4.338-1.34 6.29-.907-4.042-1.054-8.242-3.597-11.535a.512.512 0 00-.295.148 83.504 83.504 0 00-.306 25.14c.126.867.324 1.721.592 2.554 2.394-2.1 3.596-4.791 4.788-7.493.296-.296.897-.148 1.35-.148a7.15 7.15 0 01-1.044 2.998v.049zM34.133 67.345c0-.158-.148-.306.148-.306a2.64 2.64 0 012.542 1.35c.12.115.179.28.158.444a1.645 1.645 0 01-1.656-.147 2.13 2.13 0 01-1.192-1.341zm-2.247.295c0-.147-.147-.295-.147-.601.66-.106 1.33.119 1.793.601.333.28.59.64.749 1.046-.148.305-.897.147-1.045.147a2.631 2.631 0 01-1.35-1.193zm-1.497.75a2.13 2.13 0 01-.897-1.795 2.108 2.108 0 012.247 1.193c.147.296.6.602.147.898a1.763 1.763 0 01-1.497-.296zm5.99-1.203a1.812 1.812 0 012.1.453c.295.296.739.602.59.898-.147.295-1.044.148-1.645 0a4.17 4.17 0 01-1.044-1.351zm-8.533.601a2.604 2.604 0 01-.6-1.498 1.428 1.428 0 011.35.305c.547.371.882.985.896 1.647-.148.148-.148.148-.296.148a2.7 2.7 0 01-1.35-.602zm10.928-.759c-.148-.296.444-.148.749-.296a3.32 3.32 0 012.099 1.193c.148.306-.158.306-.306.306-1.192.454-1.901-.592-2.542-1.203zM25.62 66.89c-.296-.296-.296-.75-.454-1.203.306-.148.907.158 1.055.306a2.288 2.288 0 011.044 1.794c0 .296-.601.148-.749.148a3.164 3.164 0 01-.896-1.045zm15.4-.453c.444-.296 1.045-.148 1.646-.148a2.395 2.395 0 011.35 1.055 2.55 2.55 0 01-1.803.148c-.443-.148-1.044-.306-1.192-1.055zm-17.815-.296a3.758 3.758 0 01-.147-1.35c.628.207 1.194.57 1.645 1.054.184.424.284.88.296 1.34a.896.896 0 01-1.045-.157c-.305 0-.6-.434-.749-.887zm19.915 0c0-.296.295-.148.59-.296a3.33 3.33 0 012.553.897c-.158.444-.601.296-.907.444-.896.158-1.645-.592-2.236-1.045zm-21.866-.454a2.96 2.96 0 01-.147-1.617c.6-.147 1.202.602 1.645 1.055.261.454.369.98.306 1.499a1.626 1.626 0 01-1.804-.937zm24.073-.295a.808.808 0 01.6-.296 2.847 2.847 0 012.543.897c0 .296-.443.601-.749.601a3.419 3.419 0 01-2.394-1.202zm-26.162-.75a3.058 3.058 0 01-.157-1.646c.627.134 1.14.586 1.35 1.193a2.07 2.07 0 01.147 1.656c-.59 0-1.044-.601-1.34-1.203zm28.29-.148c.148-.305.601-.305.75-.453a2.482 2.482 0 012.394.897c-.148.601-.897.454-1.35.601a3.754 3.754 0 01-1.794-1.045zM17.52 64.19a2.693 2.693 0 01-.306-2.396c.606.182 1.1.622 1.35 1.203.199.525.253 1.093.158 1.646-.611.296-.907 0-1.202-.453zm32.182-.75c.148-.295.453-.295.749-.591a3.359 3.359 0 012.394.444c.148.305-.295.601-.6.601a2.03 2.03 0 01-2.543-.454zM15.42 62.7a2.85 2.85 0 01-.148-1.972c.296-.148.591.296.897.602a2.62 2.62 0 01.443 2.395A1.971 1.971 0 0115.42 62.7zm36.222-.454a2.512 2.512 0 012.247-.6c.305.147 1.054.147.906.6a2.187 2.187 0 01-3.153 0zM13.47 61.35a2.614 2.614 0 01.158-2.1 2.534 2.534 0 011.152 2.544l-.147.453c-.71.148-1.005-.6-1.163-.897zm39.976-.148a1.596 1.596 0 011.794-.749c.417.01.827.111 1.202.296a.838.838 0 01-.454.75c-.85.27-1.776.162-2.542-.297zM11.53 59.545a2.535 2.535 0 01.148-1.794c.295-.148.748.453.896.749.279.716.33 1.501.148 2.248a1.626 1.626 0 01-1.192-1.203zm43.71.158c.23-.415.6-.734 1.045-.897a3.339 3.339 0 012.099.148c-.148.749-.897.897-1.35 1.045a2.6 2.6 0 01-1.793-.296zm-45.385-1.35a2.89 2.89 0 01.145-2.25c.319.17.58.431.75.75a3.344 3.344 0 010 2.395c-.277 0-.572-.601-.897-.897zm47.179-.149c.158-.601.749-.75 1.202-.897a2.423 2.423 0 011.793.148c.148.296-.295.75-.59.897a2.728 2.728 0 01-2.405-.148zM8.238 55.956a2.028 2.028 0 01.63-1.745c.526.392.857.993.907 1.647a1.52 1.52 0 01-.493 1.311c-.749 0-1.202-.463-1.044-1.213zm50.45.444a2.079 2.079 0 011.794-1.045 1.694 1.694 0 011.192.148 1.823 1.823 0 01-1.34 1.203 2.167 2.167 0 01-1.646-.306zM6.74 54.211a2.061 2.061 0 01.591-1.804c.454.43.723 1.021.749 1.647a3.413 3.413 0 01-.443 1.646 1.637 1.637 0 01-.897-1.489zm53.288.543c.148-.898 1.055-1.193 1.971-1.341.296.148.897-.158.897.148.148.601-.453.897-.897 1.045a1.832 1.832 0 01-1.97.148zM5.39 52.506a2.485 2.485 0 01.897-2.396c.574.849.63 1.946.147 2.85-.147.147-.147.295-.295.453-.453 0-.601-.454-.749-.907zm55.988.453a2.415 2.415 0 011.045-1.35 3.152 3.152 0 011.626-.148c.157.147.157.295 0 .601-.424 1.045-1.774 1.045-2.67.897zm-57.19-2.248c-.17-.91.18-1.841.906-2.415a2.13 2.13 0 01.296 2.1c-.148.443-.296.897-.601 1.045a1.528 1.528 0 01-.601-.73zm58.393.306a2.15 2.15 0 01.896-1.35 6.372 6.372 0 011.646-.306c.148.305.148.601-.148.749-.305.907-1.35 1.055-2.394.907zM3.143 48.769a2.633 2.633 0 01.897-2.554c.305.158.305.602.453.898a3.521 3.521 0 01-.749 2.405c-.305-.157-.305-.601-.6-.749zm60.482.148a2.237 2.237 0 012.099-1.607h.591c.158.296-.148.897-.295 1.045a2.413 2.413 0 01-2.395.562zm-61.23-2.248c-.444-1.045.147-1.972.896-2.701h.148c.276.56.332 1.204.158 1.804-.306.296-.64 1.942-1.203.897zm62.275.148a1.15 1.15 0 01.453-1.045 2.118 2.118 0 011.793-.897c.306.148.148.591.148.897a2.581 2.581 0 01-2.394 1.045zM1.498 44.273a2.761 2.761 0 011.35-2.543c.59 1.045-.158 2.238-.75 3.145a.63.63 0 01-.6-.602zm63.92.296a2.543 2.543 0 011.971-2.09c.148-.158.444-.158.444.148a1.972 1.972 0 01-1.193 1.646c-.473.148-.916.444-1.222.296zm.454-2.09a2.524 2.524 0 011.35-2.07c.282-.122.59-.173.896-.148.136.47.02.976-.305 1.34a2.394 2.394 0 01-1.941.878zM.897 42.025a2.317 2.317 0 011.35-2.543c.147.148.147.295.295.591.046.921-.34 1.81-1.044 2.406-.454 0-.454-.306-.601-.454zm65.576-2.543a3.055 3.055 0 011.793-1.805c.296.158.148.75.148 1.055-.148.898-1.35 1.341-2.099 1.341.158.158.158-.591.158-.591zm-66.02.295c-.157-.6.148-1.045.296-1.646.453-.296.749-.897 1.35-.897a2.03 2.03 0 01-.306 2.09c-.443.306-1.044 1.35-1.34.453zm66.168-1.942a2.071 2.071 0 01.6-1.804 3.202 3.202 0 011.193-.75 1.618 1.618 0 01-.296 1.805 2.384 2.384 0 01-1.497.75zM.148 37.382a2.564 2.564 0 011.645-2.396c.158-.148.158.148.158.296a3.343 3.343 0 01-1.35 2.553.493.493 0 01-.453-.453zm66.768-1.795a2.436 2.436 0 011.202-2.553c.148-.296.296-.296.592-.296.172.583.12 1.21-.148 1.755-.572.493-1.045 1.094-1.646 1.094zM0 34.838c.037-.55.247-1.075.601-1.499a3.744 3.744 0 011.37-.749c.295.602-.158 1.35-.306 1.795a6.554 6.554 0 01-1.044.897c-.473 0-.621-.296-.621-.444zm66.768-2.248c.11-.908.6-1.725 1.35-2.248.16.01.286.137.296.296v.306c.134.518.025 1.07-.296 1.498-.305.148-1.35 1.499-1.35.148zM0 32.59a2.367 2.367 0 01.749-1.646 2.187 2.187 0 011.35-.602c.148.602-.148 1.045-.453 1.647a2.246 2.246 0 01-1.498.897L0 32.59zm66.473-2.248a3.875 3.875 0 011.34-2.396c.305-.147.305.296.305.296a2.317 2.317 0 01-1.35 2.544c-.295.306-.147-.296-.295-.444zm-66.02-.296a1.824 1.824 0 011.045-1.804 1.32 1.32 0 011.044-.148 2.258 2.258 0 01-1.498 2.1c-.295.148-.748.444-.59-.148zM66.167 27.8a3.175 3.175 0 011.35-2.248c.256.397.361.873.296 1.34-.148.602-1.646 2.85-1.646.908zM.75 28.094c-.12-.471-.01-.972.295-1.35a2.453 2.453 0 011.971-.898 2.268 2.268 0 01-1.498 2.1c-.315 0-.473.296-.768.148zm64.975-3.46a2.15 2.15 0 01.897-1.35c.295-.149.295.295.6.6a2.603 2.603 0 01-1.054 2.396c-.749-.286-.6-1.183-.443-1.646zm-64.522.463c.296-1.045 1.34-1.35 2.395-1.498a2.307 2.307 0 01-1.055 1.804c-.295.148-1.793.897-1.34-.306zm63.773-2.543a4.408 4.408 0 01.897-1.647c.184.17.335.375.443.601.215.983-.2 1.997-1.044 2.544a1.184 1.184 0 01-.296-1.498zm-63.004.443a1.883 1.883 0 01.985-1.32 5.377 5.377 0 011.646-.307c0 .907-.75 1.351-1.35 1.805-.404.128-1.281.473-1.281-.178zm61.95-1.794a3.225 3.225 0 01.6-2.396c.296-.148.602.296.602.601a2.436 2.436 0 01-.897 2.544 2.742 2.742 0 00-.305-.75zM2.69 20.759a2.405 2.405 0 011.054-1.35 3.605 3.605 0 011.794-.148 2.15 2.15 0 01-.897 1.34 3.349 3.349 0 01-1.685.454l-.266-.296z"></path>
            <path d="M62.876 18.955a2.653 2.653 0 01.601-2.09c.591-.158.591.591.897.897a2.959 2.959 0 01-.749 2.396 5.344 5.344 0 01-.749-1.203zm-58.935-.296c0-.601.454-.897.897-1.203a2.58 2.58 0 011.794-.148c-.148.898-1.193 1.351-2.09 1.647-.354-.148-.6.306-.6-.296zm57.733-1.646a3.738 3.738 0 01.306-2.238c.295-.148.6.295.896.601a2.683 2.683 0 01-.6 2.544c-.296-.188-.296-.612-.602-.907zm-56.747-.454a1.715 1.715 0 011.064-1.193 2.797 2.797 0 011.97 0c-.472 1.045-1.674 1.38-3.034 1.193zm55.555-2.248a6.51 6.51 0 01.295-1.646c.306 0 .601.453.897.75.33.816.157 1.75-.443 2.395a1.311 1.311 0 01-.75-1.499zm-54.048.602c-.147-.602.306-.898.897-1.193a2.521 2.521 0 012.099 0c-.562 1.193-1.941 1.193-2.996 1.193zm52.55-3.747c.148-.148.148-.296 0 0 .749-.148.897.306 1.044.602.206.807.1 1.662-.295 2.395a2.89 2.89 0 01-.749-2.997zm-51.2 1.499c.209-.582.735-.99 1.35-1.045a3.004 3.004 0 011.646.148c-.148.749-.897.897-1.646 1.045a1.418 1.418 0 01-1.35-.148zm49.367-2.396c.148-.296 0-.897.296-1.045.295 0 .749.444.897.897a2.673 2.673 0 01-.148 2.396 2.337 2.337 0 01-1.045-2.248zm-47.721.562c0-.601.601-.75 1.044-1.045a3.555 3.555 0 012.1.296 1.34 1.34 0 01-.897.897 2.433 2.433 0 01-2.247-.148zm45.957-1.913a1.41 1.41 0 01.148-1.34c.47.123.858.453 1.055.897a3.305 3.305 0 01-.148 2.09 2.15 2.15 0 01-1.055-1.647zm-44.311.306c.322-.6.967-.951 1.645-.897.453.148 1.054 0 1.498.443.157.306-.444.602-.749.75a3.418 3.418 0 01-2.394-.296zm42.37-2.1l.148-.897c.296-.148.601.148.897.443.6.602.453 1.657.305 2.554a2.958 2.958 0 01-1.35-2.1zm-40.567.601a1.429 1.429 0 011.34-.897 4.313 4.313 0 011.803.592c-.193.33-.527.552-.906.601a2.472 2.472 0 01-2.237-.296zm38.616-1.952c.148-.296-.148-.75.148-.897.453.148.907.306 1.054.897.274.666.326 1.403.148 2.1a2.958 2.958 0 01-1.35-2.1zm-36.715.602c-.147-.296.296-.602.602-.75a2.295 2.295 0 012.542.602 1.527 1.527 0 01-1.045.601 3.329 3.329 0 01-2.099-.453zM49.702 5.33a9.607 9.607 0 01-.434-1.647.364.364 0 01.601.148 2.86 2.86 0 011.055 2.544c-.158.295-.601-.148-.907-.148l-.315-.897zm-32.783-.306c-.148-.148.148-.444.295-.592a2.6 2.6 0 012.7.592l.148.158c-.749.897-2.247.443-3.143-.158zM47.298 3.83c-.148-.306-.296-1.055 0-1.35.547.116 1.03.437 1.35.896.273.506.326 1.101.147 1.647-.59.158-1.192-.444-1.497-1.193zm-28.29 0c-.148-.306.305-.454.6-.601a2.886 2.886 0 012.553.897.916.916 0 01-1.054.453 2.798 2.798 0 01-2.1-.749zm26.053-1.35c0-.296-.296-.602.148-.75.506.038.983.25 1.35.601.437.557.603 1.28.453 1.972A2.227 2.227 0 0145.06 2.48zm-23.807.463c-.147-.306.306-.454.601-.602a2.866 2.866 0 012.543.897c-.148.296-.444.296-.592.454a2.955 2.955 0 01-2.552-.75zm21.708-.612l-.296-1.202c.601-.296 1.045.157 1.35.305.469.552.733 1.248.75 1.972-.158.306-.602 0-.907-.148l-.897-.927zM23.353 1.88c0-.296.453-.296.601-.444a2.138 2.138 0 012.395 1.341 2.256 2.256 0 01-2.996-.897zM40.4 1.287c-.148-.305-.296-.601.148-.749.74.032 1.42.421 1.823 1.045.193.366.246.79.148 1.193A2.099 2.099 0 0140.4 1.287zm-14.505.148c-.147-.305.306-.305.601-.453a2.315 2.315 0 012.395 1.35c0 .296-.296.296-.601.296a3.113 3.113 0 01-2.395-1.193zm12.13-.601c-.148-.296-.295-.75.148-.75a1.459 1.459 0 011.35.602c.339.504.592 1.06.749 1.646A2.247 2.247 0 0138.025.834zm-9.735 0c-.148-.148.158-.296.305-.296a2.541 2.541 0 011.794.296c.305.296.896.601.896 1.045A2.768 2.768 0 0128.29.834zm7.34-.148c-.157-.148-.157-.306-.157-.601a2.088 2.088 0 011.646.147c.547.372.88.985.896 1.647a1.694 1.694 0 01-1.645-.444l-.74-.75zM30.695.38c-.158-.148.148-.295.296-.295 1.044-.148 1.793.6 2.394 1.498l.148.148a2.305 2.305 0 01-1.97-.296c-.277-.305-.72-.601-.868-1.055zm2.395 0c-.158-.295.147-.295.295-.295a1.527 1.527 0 011.498.6c.296.445.897.898.749 1.342A2.75 2.75 0 0133.089.38zM8.987 42.627l-.602 1.794h-1.97l1.665 1.045-.749 1.972 1.656-1.203 1.645 1.075-.601-1.804 1.498-1.045H9.735l-.748-1.834zm51.19.296l-.74 1.794h-1.803l1.488 1.055-.601 1.972 1.645-1.045 1.656 1.045-.601-1.795 1.498-1.045h-1.794l-.749-1.981zM5.842 37.53l1.646-.898.148 1.351-1.794-.453zm2.09-1.193l.748-.306c.148-.148.306-.148.306.148l.147.306h.296a2.614 2.614 0 01-.148-1.006c0-.296-.148-.592-.148-1.045h-.147v.059a.335.335 0 01-.306.306l-4.04 2.09.148.601 1.054.306 3.144.897c.147.148.295.148.443.296l.148.148h.276a1.894 1.894 0 01-.148-.898 4.932 4.932 0 01-.158-.897H9.43v.296c0 .158-.148.306-.296.158l-.896-.158-.306-1.301z"></path>
            <path d="M8.987 28.094c.147.148.295.148.59 0 .296-.148.158-.148.158-.295l.148-.158.296.158a2.22 2.22 0 00-.148 1.045 2.565 2.565 0 00-.177 1.045L9.4 29.74v-.296c0-.148 0-.306-.147-.306-.148 0-.296-.147-.601-.147l-2.838-.296 2.838 1.794.896.75-.148.147a.906.906 0 01-.532.148L5.39 32.738l2.848.296c.147.158.295.158.59.158.296 0 .159-.158.159-.306v-.148h.295c-.12.283-.171.59-.148.897-.118.284-.169.59-.147.897l-.119-.147v-.296c0-.148 0-.306-.148-.306a.768.768 0 00-.64-.276l-2.838-.296c-.148-.157-.305-.157-.6 0-.149 0-.149.148-.149.296l-.148.148-.305-.148a1.08 1.08 0 00.305-.897c.119-.284.17-.59.148-.897l1.045-.306 2.394-.897-2.394-1.666c-.148-.148-.601-.296-.75-.454.119-.283.166-.591.139-.897.13-.277.188-.582.167-.887l.296.148v.305c0 .148 0 .296.148.296s.305.148.6.148l2.849.591zm-.75-2.997a.542.542 0 00.148-.463l.148-.454c.148-.148.148-.295 0-.295l-.295-.158.147-.296c.148.148.444.148.602.296h.59v.305h-.295c-.148-.147-.295.148-.295.296l-.119.306a.542.542 0 00-.148.443l1.794.602c.158-.296.158-.602.305-.897.119-.284.17-.591.148-.897l-.453-.158.158-.296.896.454.148.147a6.904 6.904 0 01-.601 1.647l-.296.897-.305.897-.148-.148v-.295c0-.158-.148-.158-.296-.306l-2.887-1.025c-.147-.148-.295-.148-.6-.148-.149-.148-.149.148-.149.148l-.147.147-.148-.147c.148-.148.148-.296.148-.602a.542.542 0 00.147-.463c.136-.476.339-.931.602-1.35.147-.307.147-.602.295-.898l.907.296-.158.148-.591-.168c-.158 0-.306.296-.306.601l-.295.898 1.35.936zm.296-3.894c-.148-.148-.295-.148-.6-.148a.148.148 0 00-.149.148l-.147.148-.148-.148c.144-.331.344-.635.591-.897l.601-1.203a1.114 1.114 0 011.646-.592c.492.326.731.923.6 1.499l2.395-.158c.148 0 .148-.148.306-.148a.148.148 0 00.147-.148l.148.148c-.148.148-.148.306-.295.602-.148.295-.454.295-.454.453l-2.847.148-.148-.148a.986.986 0 00-.148-1.35l-.177-.148a.719.719 0 00-.986.147l-.148.148a.454.454 0 00-.147.296l2.808 1.824c.148.148.296.148.591.148a.148.148 0 00.158-.148l.148-.148.147.148a2.958 2.958 0 01-.6.897 2.958 2.958 0 01-.602.897l-.147-.147.147-.148c.158-.158.158-.158.158-.306s-.305-.148-.453-.296l-2.395-1.37zm5.686-3.47c.157.147.305.147.453.295a.148.148 0 00.148-.148l.148-.148.148.148a3.135 3.135 0 00-.592.897 3.175 3.175 0 01-.6.898l-.129-.119.296-.295c.148-.158.148-.158.148-.306-.148-.148-.148-.296-.296-.296l-2.247-1.794c-.148-.158-.295-.158-.453-.306a.148.148 0 00-.148.148l-.148.158-.167-.119c.182-.31.382-.61.601-.897.144-.33.344-.634.591-.897l.158.148-.306.266c-.147.148-.147.148-.147.296.147.148.147.296.295.296l2.247 1.774zm4.345-3.422a2.189 2.189 0 01-.896 1.351 2.404 2.404 0 01-3.45.296l-.295-.296c-1.044-1.045-.6-2.544.296-3.599a4.317 4.317 0 011.35-.897h.197c.145.333.349.637.6.897l-.147.158-.453-.404c-.512.001-1 .22-1.34.601a1.687 1.687 0 00-.207 2.357l.157.148a1.774 1.774 0 002.69.295c.148-.148.148-.148.296-.148.3-.308.553-.66.749-1.045h.158l.295.286zm.444-4.19l1.685 1.045-1.202.75-.483-1.795zm1.803 1.35l.601.592c.148 0 .148.158.148.306v.148l-.306.148.158.148c.296-.148.591-.444.897-.592.327-.154.63-.356.896-.601l-.147-.148-.158.148c-.148.148-.296.148-.444-.148l-3.734-2.554-.296.306.148 1.045.601 3.293c.148.158 0 .306-.157.601l-.148.148.148.148a1.97 1.97 0 00.6-.444c.167-.156.376-.259.602-.295l-.148-.158-.306.158c-.147.148-.295.148-.295-.158l-.148-1.045 1.488-1.045zm1.941-3.598c-.148-.148-.148-.296-.148-.601h-.295l-.148.148-.158-.148.897-.296c.158-.148.305-.148.601-.148.332.14.636.341.897.592l2.847 1.656-.896-2.406c-.148-.147-.148-.295-.148-.591s-.148-.158-.306 0l-.147.148-.128-.148c.22-.13.473-.192.729-.178 0-.147.443-.295.6-.295l.149.148-.306-.148c-.296.148-.296.148-.296.295 0 .148.148.306.148.602L27.7 9.46c.147.147.147.453.295.601v-.148l-.6.148a3.557 3.557 0 01-1.045-.601l-3.144-1.736.897 2.544c.148.148.148.296.148.601.148.148.148.148.305 0l.148-.147.148.147c-.23.12-.49.171-.749.148-.148.148-.601.148-.749.296l-.148-.148.148-.148.148-.148c0-.147-.148-.305-.148-.601l-.6-2.396zm7.942-2.248c.01-.21-.042-.419-.148-.601-.157-.109-.157-.109-.305-.109h-.296V4.62a2.56 2.56 0 001.045-.148c.295 0 .896-.158 1.044-.158v.306l-.295.148c-.148 0-.148.147-.306.147-.148.148-.148.306 0 .602l.158 1.35.148.148 1.192-1.35c.158-.148.305-.444.601-.602.148-.148.148-.148.148-.295v-.296h.6c.306 0 .306-.158.602-.158v.306c-.277.005-.543.11-.749.295l-1.35 1.608 1.97 2.1c.143.182.36.29.592.295v.306h-.591c-.148 0-.453.148-.601.148L32.34 7.725l-.601-.601c-.148 0-.148 0-.148.148l.148 1.35c-.006.21.045.419.147.602.148.148.148.148.296.148h.335v.296c-.37-.024-.74.037-1.084.177-.295 0-.897.148-1.044.148v-.621l.305-.148c.148 0 .148 0 .296-.148s.148-.306 0-.601l-.296-2.85zm6.582 1.045c.118.122.286.18.454.158l.443.148c.148.148.306.148.306-.148l.295-.453h.296c-.12.23-.17.49-.148.749a6.658 6.658 0 01-.148.75h-.148v-.297a.325.325 0 00-.305-.305l-.444-.148c-.147 0-.305-.148-.453-.148l-.148 1.794c.283.121.59.172.897.148a.906.906 0 00.897 0l.148-.591.305.148-.108 1.045h-.197c-.592 0-1.193-.148-1.794-.148a1.91 1.91 0 00-.896-.148 1.91 1.91 0 00-.897-.148l.148-.158a.513.513 0 00.147-.295l.602-3.146c.147-.147.147-.295 0-.6 0-.149-.148-.149-.296-.149h-.158v-.296a.92.92 0 00.601.148l.454.148c.488.129.992.192 1.497.187.283.122.59.173.897.148l.148.158-.148.897-.108-.217V5.31c0-.148-.454-.148-.897-.148a1.842 1.842 0 00-.907-.158l-.335 1.666z"></path>
            <path d="M41.169 6.079c.147-.158.147-.306.147-.602a.148.148 0 00-.147-.147l-.148-.148.148-.158c.28.128.589.183.896.158a.561.561 0 00.454.148c.147.295.147.749.295 1.045l1.35 3.145.601-2.248V6.67c0-.147-.157-.147-.157-.147l-.148-.148v-.296c.305.148.6.148.749.296.23.118.49.17.748.148l-.147.147-.148-.147c-.148-.148-.148-.148-.306 0-.157.147-.147.305-.147.6l-.897 2.959a.907.907 0 00-.148.601h-.148l-.6-.306a3.56 3.56 0 00-.602-1.045l-1.35-3.253-.896 2.691c-.148.148-.148.306-.148.602a.148.148 0 00.148.148l.147.148v.177c-.147-.158-.59-.158-.749-.306a1.35 1.35 0 00-.748-.147l.197-.168.147.148c.148.148.148.148.296 0a.473.473 0 00.453-.454l.858-2.84zm5.99 2.248c.148-.158.148-.306.148-.602a.148.148 0 00-.147-.148l-.148-.157.148-.148c.147.148.443.305.59.453l.602.296c.113.34.163.697.148 1.055l.6 3.293 1.35-2.1c.149-.148.149-.296.149-.601a.148.148 0 00-.148-.148l-.148-.148.148-.148c.166.156.375.26.6.296.149 0 .444.305.592.305v.296l-.148-.148c-.148-.128-.148-.128-.256-.128-.108 0-.148.296-.296.444l-1.675 2.681c-.148.296-.148.444-.295.592h-.148l-.453-.296a4.212 4.212 0 01-.148-1.35l-.601-3.441-1.31 2.356c-.158.148-.158.296-.158.601 0 .148.157.148.157.148v.296l-.157.148a1.123 1.123 0 00-.592-.296 1.182 1.182 0 00-.6-.296l.147-.157.148.157c.148.148.148.148.305.148.158 0 .148-.305.296-.453l1.3-2.8zm5.233 4.94l.305.295.296.306a.47.47 0 00.305.147l.296-.295.148.148-.601.591c-.18.175-.33.378-.444.602l-.147-.148.147-.296c.148-.158.148-.306-.147-.454l-.306-.295-.296-.306-1.202 1.35.601.602c.17.185.375.336.601.444l.602-.296.147.148-.453.75h-.148a4.592 4.592 0 00-1.35-1.046l-.59-.601c-.159-.148-.454-.296-.602-.602l.148-.148.148.148c.147 0 .147-.148.305-.148l2.07-2.346c.147-.148.147-.296.305-.454 0-.148 0-.148-.158-.295l-.148-.237.148-.148c.158.148.306.296.453.296l.296.296c.411.225.77.534 1.054.907.308.11.57.318.75.591v.158l-.75.592-.147-.148.295-.296c.148-.148-.295-.306-.6-.602-.306-.295-.444-.295-.602-.6l-.73 1.39zm1.498 4.643c.157.148.305.444.6.601l.602.592.6-.296.149.148-.897.601h-.148a4.466 4.466 0 01-1.054-1.35c-.148-.148-.296-.444-.601-.592-.306-.148-.296-.453-.591-.601l.147-.148.148.148c.148.148.148 0 .296-.148l2.394-1.972c.158-.148.306-.148.306-.296s0-.158-.148-.305l-.158-.148.158-.148c.179.31.376.61.591.897.306.296.601.601.601.897l.148.148-.148-.148c-.148-.148-.148-.148-.295-.148-.148.148-.306.148-.454.296L53.89 17.91zm4.247 7.187a2.405 2.405 0 01-1.055-1.35 2.682 2.682 0 011.055-3.59 2.413 2.413 0 013.29 1.351c0 .082.067.148.149.148.223.527.376 1.08.453 1.647l-.148.148c-.305.148-.749.148-1.054.295l-.197-.098.6-.296a1.48 1.48 0 00-.137-1.4 1.891 1.891 0 00-2.395-.897.148.148 0 00-.157.148 1.882 1.882 0 00-1.193 2.543.148.148 0 00.148.158c.255.384.556.735.897 1.045.138.148-.256.148-.256.148zm.7 1.952c.12.283.171.59.147.897.03.318.131.624.296.898l.748-.148.148.296-1.054.147h-.148c-.148-.591-.295-1.045-.453-1.646a1.914 1.914 0 01-.148-.897c0-.296-.148-.444-.148-.75l.148-.147.148.147c.158.148.158.148.305 0l2.956-.897c.148-.148.296-.148.592-.148.157-.147.157-.147 0-.305l-.148-.296.305-.148c.118.343.217.692.296 1.045.148.306.148.75.296 1.055l-.296.148-.148-.148v-.158c-.148 0-.305.158-.601.158l-3.242.897zm4.04 2.692c.147 0 .295-.148.6-.148.148 0 .148-.148.148-.296v-.305h.296c0 .305.147.601.147 1.054.13.333.184.69.158 1.046h-.305l-.148-.306c0-.148-.148-.148-.148-.296s-.296-.148-.601 0l-1.793.296c-.897.158-1.646.158-1.498 1.35.148 1.194.749 1.203 1.793 1.056l1.646-.158c.157 0 .305-.148.6-.148.296 0 .149-.148.149-.296v-.305h.305c-.023.31.028.62.148.907 0 .295.148.591.148.897h-.296l-.177-.306c-.148-.148-.148-.148-.148-.296-.148-.148-.296-.148-.591 0l-2.1.296c-1.349.158-1.792-.591-2.098-1.794-.148-1.203.306-2.1 1.045-2.1l2.72-.148zm-1.203 6.724v.148c-.148.601-.296 1.045-1.044 1.045-.75 0-1.045-.296-.897-1.045 0-.148.148-.148.148-.296l1.793.148zm1.97.296v.305c-.147.592-.295.75-.896.592-.601-.158-.897-.444-.749-1.045v-.148l1.646.296zm.296-1.647l-.147.148c0 .148-.148.148-.148.306 0 .157-.296.147-.601 0l-3.144-.306a.512.512 0 01-.295-.148v-.128h-.148c0 .296-.158.601-.158.897-.12.283-.171.59-.147.897.147 1.055.6 1.972 1.497 1.972.897.148 1.045-.306 1.35-1.35.148.6.296 1.35 1.045 1.35.896.148.896-.601 1.044-1.203.13-.437.184-.894.158-1.35 0-.296.148-.592.148-1.045l-.454-.04zM15.766 53.561l1.754 1.636-.306.296-1.35-1.282-.59.897 1.34 1.046-.296.295-1.35-1.045-1.045 1.045-.295-.295 2.138-2.593zm4.592 4.19a2.22 2.22 0 01-.296 1.055c-.285.37-.644.675-1.054.897a1.705 1.705 0 01-2.09-1.203c0-.148 0-.148-.147-.148-.158-.453.148-.897.296-1.35.147-.296.6-.602.896-.898a1.428 1.428 0 011.35.148c.749.454 1.045.917 1.045 1.499zm-1.498 1.646c.332-.14.636-.341.897-.591.17-.275.275-.585.305-.907 0-.296-.305-.592-.601-.898a1.428 1.428 0 00-1.045-.295c-.37.15-.683.412-.896.749-.171.27-.276.578-.306.897 0 .296.306.602.601.897.335.122.69.172 1.045.148zm3.449-1.193l-.897 1.972a.868.868 0 00-.158.601c0 .296.158.602.454.602a.985.985 0 00.896 0c.148-.148.296-.306.296-.454l.906-1.971.296.147-.897 1.795a3.047 3.047 0 01-.6.897 1.399 1.399 0 01-1.35.158 1.301 1.301 0 01-.897-1.055c.03-.32.134-.627.305-.897l.897-1.795h.749zm3.31 1.341l.602.158.896 3.145.897-2.554.296.158-1.045 3.293-.66-.148-.897-3.145-.896 2.544-.296-.148 1.104-3.303zm3.725 1.055l1.35.148c.296.148.897.296.897.601.121.386.171.79.148 1.193-.148.306-.148.602-.306.897a.878.878 0 01-1.192.75l-1.35-.119.453-3.47zm.75 3.293h.295c.147-.148.305-.148.453-.296l.296-.601c.147-.148.147-.148.147-.296a.986.986 0 00-.147-1.055.818.818 0 00-.75-.444l-.896-.157-.296 2.553.897.296zm3.142-2.692l2.543-.157v.453h-2.1v1.045h1.794v.306H33.68v1.045h2.099v.296l-2.543.157v-3.145zm3.745-.157l1.34-.148c.305-.148.897.148 1.054.305.263.307.464.662.591 1.045a.898.898 0 01-.147 1.046 1.094 1.094 0 01-1.045.897l-1.33.157-.463-3.302zm1.645 2.849c.148 0 .148-.148.296-.148.148-.148.296-.148.296-.306.157-.147.157-.295.157-.591v-.306c-.157-.296-.157-.591-.305-.897a.916.916 0 00-.897-.148l-.897.148.296 2.544 1.054-.296zm4.641-2.997l-.147-.296c.147-.148.295-.148.59-.306.296-.157.149-.295.149-.591l.305-.158L45.21 62.7l-.444.148-.906-2.248-.592.296zm3.292-.897a.315.315 0 01-.296-.296.888.888 0 01-.158-.602c.123-.265.336-.478.601-.601.284-.119.59-.17.897-.148.329.19.55.521.601.897-.148.148-.148.148-.148.296s.296 0 .296.158l.453.443c.119.284.17.591.148.898a.64.64 0 01-.601.601 1.91 1.91 0 01-.897.148c-.295-.148-.6-.296-.6-.592 0-.295-.149-.305-.149-.601a.562.562 0 00.148-.454c0-.147-.148-.147-.295-.147zm1.192-.75c.157-.148.157-.295 0-.295-.158 0-.148-.148-.296-.148-.148-.158-.295 0-.443.148-.148.147-.306.147-.306.295s0 .296.148.296.158.158.306.306c.147.148.295 0 .295-.148a2.1 2.1 0 01.296-.454zm.749 1.499a.365.365 0 00-.148-.602c-.148-.147-.148-.295-.296-.295s-.305 0-.6.148c-.149.147-.296.147-.296.295a.375.375 0 00.147.602c.148.148.148.305.296.305a.374.374 0 00.601-.157c0 .157.148-.148.296-.296zm1.054-2.248l-.305-.296a.917.917 0 01-.148-.601c.148-.296.148-.602.6-.602.226-.134.49-.186.75-.147.148 0 .295.147.6.295.149.158.149.306.149.602 0 .148-.148.148-.148.305h.295c.148.148.296.148.601.296.121.283.172.59.148.897a.986.986 0 01-.6.75 1.891 1.891 0 01-.897.147c-.296-.147-.602-.147-.602-.443a.74.74 0 010-1.055c0-.148-.295-.148-.443-.148zm1.045-.75c.147-.147 0-.295-.148-.295s-.148-.148-.296-.148a.552.552 0 00-.453.148.454.454 0 00-.148.601v.148c0 .148 0 .148.148.148s.148.148.295.148a.522.522 0 00.306-.148c.148-.453.148-.601.296-.601zm.896 1.204c.148-.148 0-.306-.148-.602-.147-.296-.147-.148-.295-.148h-.601c-.148.148-.296.148-.296.296-.158.148 0 .306.148.601l.296.296c.147.148.305 0 .6-.148a.286.286 0 00.296-.295zm2.996-1.785l-.601-.592-1.045.898-.295-.306-.158-2.544.305-.148 1.35 1.647.296-.296.148.296-.296.296.601.601-.305.148zm-.75-.897l-1.044-1.075.148 1.795.897-.72z"></path>
          </g>
          <path d="M77.095 21.203H97.61l.148 28.463H77.243z"></path>
        </g>
      </svg>
    </div>
  );
};

export default AKC;