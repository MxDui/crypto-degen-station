<script>
  import { Container, Col, Row, Card, Button} from "sveltestrap";
  import { onMount } from "svelte";
  import "./home.css";

  let ethPrice;
  let myCryptos = [];
  onMount(async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true"
    );
	const data = await response.json();
	ethPrice = data['ethereum'];
  });
</script>

<Container class="text-center p-5">
	{#if ethPrice}
	<h1>{ethPrice.usd}</h1>
	{:else}
	<h1>Loading...</h1>
	{/if}
	<Button class="btn-success">Add Crypto</Button>
</Container>
