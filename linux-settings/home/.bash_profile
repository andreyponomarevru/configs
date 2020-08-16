alias lr='ls -hartl'
alias g='grep -i'
alias get='curl -OL'

# settings for linux prompt in timux
export PS1="\[$(tput bold)$(tput setb 2)$(tput setaf 2)\]\u@\h\[$(tput sgr0)\]:\[\033[01;34m\]\w\[$(tput sgr0)\]$ "
  alias ls='ls --color'
  alias dir='dir --color'
  alias vdir='vdir --color'
  alias grep='grep --color'
  alias fgrep='fgrep --color'
  alias egrep='egrep --color'

