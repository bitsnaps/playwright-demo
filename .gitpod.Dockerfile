FROM gitpod/workspace-full:latest

RUN sudo apt-get update

RUN sudo install-packages libatk1.0-0 \
      libatk-bridge2.0-0 \                         
      libcups2 \                                   
      libdrm2 \                                    
      libxkbcommon0 \                              
      libxcomposite1 \                             
      libxdamage1 \                                
      libxfixes3 \                                 
      libxrandr2 \                                 
      libgbm1 \                                    
      libatspi2.0-0 \                              
      libwayland-client0