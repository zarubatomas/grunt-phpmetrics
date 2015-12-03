<?php
/**
 * Sample class for tests grunt-phpmetrics
 *
 */
class Thing
{

    /**
     * @var string
     */
    private $a = '';



    /**
     * Constructor
     *
     * @param World $world
     * @param string $name
     */
    public function __construct(World $world, $name)
    {
        $this->a = $name;
    }



    /**
     * Sets the thing's name
     *
     * @param string $name
     */
    public function setName($name)
    {
        $this->a = $name;
    }



    /**
     * Returns thing's name
     *
     * @return string
     */
    public function getName()
    {
        return $this->a;
    }
}