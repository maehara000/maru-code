<?php
$instagram = null;
$instagram_business_id = '17841443761834181'; // InstagramビジネスアカウントのID
$access_token = 'EAASubvIe0ZBQBADTRRkEFC1rVd9Lwj3aNvLXPu45h9IOtPO5122ouktxO9QrqqJgmPte06CczEgyklTImScvmD9ZATd8kTqhYLOuSNndhn659sTGCIaaxm7rTOacjZAeZAByjpxH2fyWnWQKvk10FoNF5ZAsEtQVWtK8j1ASFA097MdCO6XeP9VEc6PJxrR0ZD'; // 有効期限無期限のアクセストークン
$post_count = 5;
$query = 'name,media.limit(' . $post_count. '){caption,like_count,media_url,permalink,timestamp,username,comments_count}';
$get_url = 'https://graph.facebook.com/v7.0/' . $instagram_business_id . '?fields=' . $query . '&access_token=' . $access_token;
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $get_url);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'GET');
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($curl);
curl_close($curl); 
if($response){
	$instagram = json_decode($response);
	if(isset($instagram->error)){
		$instagram = null;
	}
}
?>


<ul>
<?php
foreach($instagram->media->data as $post):
	$caption = $post->caption;
	$caption = preg_replace('/\n/', '<br>', $caption);
?>
	<li>
		<a href="<?php echo $post->permalink; ?>" target="_blank" rel="noopener noreferrer">
			<span class="thumbnail">
				<img src="<?php if($post->media_type=='VIDEO'){ echo $post->thumbnail_url; } else { echo $post->media_url; } ?>" alt="<?php echo $caption; ?>">
			</span>
		</a>
	</li>
<?php endforeach; ?>
</ul>