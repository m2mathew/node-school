import React from 'react'

export const SearchBar = React.createClass({
	render() {
		return (
			<form style={{ paddingLeft: '50px' }}>
				<input type="search" placeholder="Search..."/>
				<label>
					<input type="checkbox" />
					Only show products in stock
				</label>
			</form>
		)
	}
})

export const ProductCategoryRow = React.createClass({
	render() {
		return (
			<thead>
				<tr>
					<th>A category row</th>
				</tr>
			</thead>
		)
	}
})

export const ProductRow = React.createClass({
	render() {
		return (
			<tbody>
				<tr>
					<td>A row</td>
				</tr>
			</tbody>
		)
	}
})

export const ProductTable = React.createClass({
	render() {
		return (
			<table>
				<ProductCategoryRow />
				<ProductRow />
			</table>
		)
	}
})


export const FilterableProductTable = React.createClass({
  render() {
    return (
      <div>
      	<h1 style={{ fontFamily: 'Input Mono' }}>O hai, this is a table!</h1>
      	<SearchBar />
      	<ProductTable
      		products={this.props.products}
      	/>
      </div>
    )
  }
})
