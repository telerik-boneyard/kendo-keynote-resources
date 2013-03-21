<?PHP
require_once 'lib/Kendo/AutoLoad.php';
include 'header.php';

$colorPicker = new \Kendo\UI\ColorPicker('my-picker');
?>

<h2>Color Picker</h2>
<?= $colorPicker->render(); ?>

<?PHP
include 'footer.php';
?>
