// footer.js
import { ref } from 'vue'
export default {
	setup() {
		const message = ref('京ICP备20025743号-1')
		return {
			message,
		}
	},
	template: `
  <footer class="footer underline-effect">
    <marquee
      behavior="slide"
      direction="up"
    >
      <img
        style="vertical-align: text-top;width: 16px;"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASGSURBVDhPbZVZbBR1HMc/s+d0u1e7292uLSKlcoPFcihUaAgJRRFNTVDiCyREjUYbjDxofDH6oC8aICEaXqSGBw0mWi4hUCEEFIwccgnb0ovee9+7szPjv+2GgvrN/JM5/r/P/OZ3jaTr+rfATLH+RyrF5BC//3KMfKbA6k0bkT1PiPumqcf/Vd8E8Fdx0jx1XZIWY/jyCU61d1BM3GIgb8NY4WamVyYfcbDh9RZqVz4PBmfJ4IHOGEonj6hzbxutL3xFPNnFHLuRHfIob8kDrHrWj3ull1c37eHkl2+Wdj+qfwE1lOB+dh+Ms3VHHdtqE7i+uUn4jkq4WyW+6WteUq/T1v4a+39U0Ac7hI0+ZVrSA6COwsCxNpqaD+Ou9/OO9zo9BxMYZrhRkwXIa0hVbi68e54ttiv4Vy9lffNewpe+QC1ES5SHgJIWpeN2GZeGlrFxWZLUVQHrjyO5rVgjKrnzo5hneZBTWUIHLtK6oUBn1wIOnI5h0PMlSgmoKXm0a3vRpDKRwAxOkdnECJhVBSI5pNk2LI1uDMNpLCIsoZ4sNZUCIklEUwYkpVN8ojYNjPT/QeHWaSrsFiha0QMBvE3VpEQgkqs8qFtrsX/SgK1tCYYqG75GL2lRRug6AZ8Nen8mE7s7DdQLKRJJhbqqHKLQOHnRhmmdk/CLM1EHk0h/pckcHUXpiWHZ1UTlzqc41D4Rt3IaFptId4+RH+ufQE0Bk8HzJKImFtUmqV1hYd935Zz9/D4NywO4bA4yN6NoY3ly16M4BmPc+PQue9qt+BvcLK6JExrMk+k/Nw3UtRDJhAHn+F22bBDdodhRjozg+f5PDDVmClVGNJ8J77oAgc57hPbfIF0w0rrZjCMcFLYmDLap8pkEumesxTVXRvXXsH1lEmqq2Md8jgyYCB8NIgkPsx1dJC+OcaUiwA+GJ4WRm+3PjFF01OJe6Mf5+HOTwMmm1AoZ9ITOUHeSRfN7+OyDRj7etYYjycWQUNicCVPpNnDoqEMkSiSBCt5/W2Z5fZChoLjMZUTP906gSkCpT7zJjzKicH/sNu81WWk9VU7n8Qx/G5bQsqCLQFmI4uEaCtEsM+bZ+Kill9ELvWQUGdkrqsManwRODgetGG4eOfsG2ZEC+ZCovft9zH65AatfFgMnLA4TqbEsrlmVYi55xPMQPT/dIevwYq+zU1Ztw7t0N5Kp8syDaaMXo4SufkgxHSF0bgRTuU712vmokSxKJi2CLjypLEeymAlf6KaomnAtm42qluN7eidGi2/CwelpoxaNFEJOjFZRDuvqcc97TPRwAmwSRpEAq0umEEsRuXwPWXjpXTNHxD5PfjiCphZLlFKWJ1SMn8CzUMcsspiPa2KTSSwjuXGRddFWhXCcVHAcyWiebLnccAhzmQHvCrsYDtdKlIeAsu8V0XXryQ6PYzHGcPqKmKUMFknBmI+hZ7M45nlx1jsxWFKYXBaMVXMxubchu1pKlKmkPPILUHNpYsErRHp/w26LiomdxSSnxZJF3MS08XiwVDcKV3yU++omvZ0Wff8Ak+7uKKNpSQ4AAAAASUVORK5CYII="
        alt="guohui"
      >&nbsp;<a
        href="https://beian.miit.gov.cn/"
        target="_blank"
        rel="noreferrer"
      >{{ message }}</a>
    </marquee>
  </footer>`,
}
