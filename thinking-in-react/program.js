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
        const products = this.props.products;

        const rows = [];
        let currentCategory;

        products.forEach((product) => {
            if (product.category !== currentCategory) {
                currentCategory = product.category;

                rows.push((
                    <ProductCategoryRow
                        key={currentCategory}
                        category={currentCategory}
                    />
                ));
            }

            rows.push((
                <ProductRow key={product.name} product={product}/>
            ));
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    },
})


export const FilterableProductTable = React.createClass({
	getInitialState {
		filterText: '',
	}

  render() {
    return (
      <div>
      	<h1 style={{ fontFamily: 'Input Mono' }}>Welcome to my table!</h1>
      	<SearchBar />
      	<ProductTable
      		products={this.props.products}
      	/>
      </div>
    )
  }
})
