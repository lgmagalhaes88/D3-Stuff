import * as d3 from 'd3';

export class Chart {
   private static values = [30, 50, 150, 300, 502];

    /** Create a simple chart */
    public static chartFixed() {
        d3.select('.chart') // search for class '.chart'
            .selectAll('div') // search the component where the content will be insert
            .data(this.values) // the array
            .enter()
            .append('div')
            .style('width', function (v) { return v + 'px'; })
            .text(function (v) { return v; });
    }

    /* The d3 tutorial will tell you to use d3.scale.linear. but in v4 it's pass to be d3.scale()*/
    public static chartInDiv() {
        const scale = d3.scaleLinear()
            .domain([0, 502]) // min and max values
            .range([0, 300]);

        d3.select('.chart2')
            .selectAll('div')
            .data(this.values)
            .enter()
            .append('div')
            .style('width', function (v) { return scale(v) + 'px'; })
            .text(function (v) { return v; });
    }
}
