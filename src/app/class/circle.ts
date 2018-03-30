import * as d3 from 'd3';

export class Circle {
    public static selectAllCircles() {
        /*
        //The line bellow search for the html element circle.
        But, as i gonna use more circles in this page, i can not call the element.
        I must use a class.

        const circles = d3.selectAll('circle');
        */
        const circles = d3.selectAll('.circleIE');
        circles.style('fill', 'steelblue');
        circles.attr('r', 30);
    }

    public static moveRandomCircles() {
        const circles = d3.selectAll('.circleIEDance');
        circles.data([32, 57, 112]);
        circles.style('fill', 'steelblue');
        circles.attr('r', function (d) { return Math.sqrt(d); });
        circles.attr('cx', function (d, i) { return i * 100 + 30; });
        window.setInterval(() => circles.attr('cx', function () { return Math.random() * 700; }), 500);
    }

    public static generateCircles() {
        const svg = d3.select('.generatingSVG');
        window.setInterval(() => {
            svg.data([Math.random() * 12])
                .enter().append('circle')
                .attr('cy', 60)
                .attr('cx', function (d, i) { return i * 100 + 30; })
                .attr('r', function (d) { return Math.sqrt(d); });
        });

    }
}
