import styled from 'styled-components';

export const Loader = styled.div`
  position: relative;
  width: 2.5em;
  height: 2.5em;
  transform: rotate(165deg);
  
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0.5em;
    height: 0.5em;
    border-radius: 0.25em;
    transform: translate(-50%, -50%);
  }
  
  &:before {
    animation: before 2s infinite;
  }
  
  &:after {
    animation: after 2s infinite;
  }

  @keyframes before {
    0% {
      width: 0.5em;
      box-shadow:
        1em -0.5em rgba(233, 79, 137, .75),
        -1em 0.5em rgba(110, 202, 171, .75);
    }
    35% {
      width: 2.5em;
      box-shadow:
        0 -0.5em rgba(233, 79, 137, .75),
        0   0.5em  rgba(110, 202, 171, .75);
    }
    70% {
      width: 0.5em;
      box-shadow:
        -1em -0.5em rgba(233, 79, 137, .75),
        1em 0.5em rgba(110, 202, 171, .75);
    }
    100% {
      box-shadow:
        1em -0.5em rgba(233, 79, 137, .75),
        -1em 0.5em rgba(110, 202, 171, .75);
    }
  }

  @keyframes after {
    0% {
      height: 0.5em;
      box-shadow:
        0.5em 1em rgba(239, 191, 88, .75),
        -0.5em -1em rgba(83, 192, 164, .75);
    }
    35% {
      height: 2.5em;
      box-shadow:
          0.5em  0 rgba(239, 191, 88, .75),
        -0.5em 0 rgba(83, 192, 164, .75);
    }
    70% {
      height: 0.5em;
      box-shadow:
        0.5em -1em rgba(239, 191, 88, .75),
        -0.5em 1em rgba(83, 192, 164, .75);
    }
    100% {
      box-shadow:
        0.5em 1em rgba(239, 191, 88, .75),
        -0.5em -1em rgba(83, 192, 164, .75);
    }
  }



  /**
  * Attempt to center the whole thing!
  */



    position: absolute;
    top: calc(50% - 2.5em / 2);
    left: calc(50% - 2.5em / 2);
  


`