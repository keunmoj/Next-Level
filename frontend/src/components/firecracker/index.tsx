import { CreateTypes } from "canvas-confetti";
import React, { Component } from "react";
import { StyledConfetti } from "./Firecracker.styled";

class FireCrackerClass extends Component {
  private isAnimationEnabled: boolean;
  private animationInstance: CreateTypes | null = null;

  state = {
    isGameOver: false,
  };

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    if (nextProps.isGameOver !== prevState.isGameOver) {
      return { isGameOver: nextProps.isGameOver };
    }
    return null;
  }

  constructor(props: {}) {
    super(props);
    this.isAnimationEnabled = false;
    this.nextTickAnimation = this.nextTickAnimation.bind(this);
  }

  makeShot(angle: number, originX: number) {
    this.animationInstance &&
      this.animationInstance({
        particleCount: 5,
        angle,
        spread: 60,
        origin: { x: originX },
        colors: ["#bb0000", "#ffffff"],
      });
  }

  nextTickAnimation() {
    this.makeShot(60, 0);
    this.makeShot(120, 1);
    if (this.isAnimationEnabled) requestAnimationFrame(this.nextTickAnimation);
  }

  startAnimation() {
    if (!this.isAnimationEnabled) {
      this.isAnimationEnabled = true;
      this.nextTickAnimation();
      // setTimeout(() => {
      //   this.isAnimationEnabled = false;
      // }, 2000);
    }
  }

  handlerClickStart = () => {
    this.startAnimation();
  };

  getInstance = (instance: CreateTypes | null) => {
    this.animationInstance = instance;
  };

  componentWillUnmount() {
    this.isAnimationEnabled = false;
  }

  render() {
    return <StyledConfetti refConfetti={this.getInstance} className="canvas" />;
  }
}

export const FireCracker = React.forwardRef<FireCrackerClass, {}>(
  (props, ref) => <FireCrackerClass ref={ref} {...props} />
);
